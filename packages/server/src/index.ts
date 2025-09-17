import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { config } from "dotenv";
import { cors } from "hono/cors";
import { zValidator } from "@hono/zod-validator";
import bcrypt from "bcrypt";
import z from "zod";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { sign, verify, decode } from "hono/jwt";
import { JwtTokenExpired, JwtTokenInvalid } from "hono/utils/jwt/types";

config();

type JWTPayload = {
  id: number;
  login: string;
};

const CLIENT_PORT = process.env.CLIENT_PORT;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;
const SERVER_PORT = process.env.SERVER_PORT || "9000";

const REFRESH_TOKEN_COOKIE = "refresh_token";

const ACCESS_TOKEN_EXP_IN_SEC = 60 * 5;
const REFRESH_TOKEN_EXP_IN_SEC = 60 * 60 * 24 * 7;

const app = new Hono();

const db = {
  users: [
    {
      id: 1,
      login: "admin",
      password: await hashPassword("admin"),
      name: "John Doe",
    },
  ],
};

app.use(
  "*",
  cors({
    origin: `http://localhost:${CLIENT_PORT}`,
    credentials: true,
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/auth", (c) => {
  let accessToken: string | undefined | null = c.req.header("Authorization");

  if (!accessToken) {
    return c.json({ message: "Токен не передан" }, 404);
  }

  accessToken = extractToken(accessToken);

  if (!accessToken) {
    return c.json({ message: "Токен не передан" }, 404);
  }

  const { payload } = decodeToken(accessToken);

  const user = db.users.find((user) => user.id === payload.id);

  if (!user) {
    return c.json({ message: "user not found" }, 404);
  }

  return c.json({
    user: {
      name: user.name,
    },
  });
});

app.post(
  "/auth/sign-in",
  zValidator(
    "json",
    z.object({
      login: z.string(),
      password: z.string(),
    }),
    async (result, c) => {
      if (!result.success) return c.json(result.error, 400);

      const { login, password } = result.data;

      const incorrectResponse = c.json(
        { message: "username or password is incorrect" },
        401
      );

      const user = db.users.find((user) => user.login === login);
      if (!user) return incorrectResponse;

      const isPasswordMatch = comparePassword(password, user.password);
      if (!isPasswordMatch) return incorrectResponse;

      const payload: JWTPayload = { id: user.id, login };

      const accessToken = await generateAccessToken(payload);
      const refreshToken = await generateRefreshToken(payload);

      setCookie(c, REFRESH_TOKEN_COOKIE, refreshToken, {
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        maxAge: REFRESH_TOKEN_EXP_IN_SEC,
      });

      return c.json({ accessToken, user: { name: user.name } });
    }
  )
);

app.get("/auth/refresh", async (c) => {
  const refreshToken = getCookie(c, REFRESH_TOKEN_COOKIE);

  if (!refreshToken) {
    return c.json({ message: "refresh token not found" }, 401);
  }

  try {
    const decoded = (await verify(
      refreshToken,
      REFRESH_TOKEN_SECRET
    )) as JWTPayload;

    const payload: JWTPayload = { id: decoded.id, login: decoded.login };
    const accessToken = await generateAccessToken(payload);

    return c.json({ accessToken });
  } catch (error) {
    switch (true) {
      case error instanceof JwtTokenExpired:
        return c.json({ message: "refresh token expired" }, 401);

      case error instanceof JwtTokenInvalid:
        return c.json({ message: "refresh token invalid" }, 401);

      default:
        return c.json({ message: "unexpected error", error }, 401);
    }
  }
});

app.post("/auth/sign-out", (c) => {
  deleteCookie(c, REFRESH_TOKEN_COOKIE);

  return c.json({ message: "success" });
});

serve(
  {
    fetch: app.fetch,
    port: Number(SERVER_PORT),
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}
function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

function decodeToken(token: string) {
  return decode(token);
}

function generateAccessToken(payload: JWTPayload) {
  return sign(
    {
      ...payload,
      exp: getTokenExpiration(ACCESS_TOKEN_EXP_IN_SEC),
    },
    ACCESS_TOKEN_SECRET
  );
}

function generateRefreshToken(payload: JWTPayload) {
  return sign(
    {
      ...payload,
      exp: getTokenExpiration(REFRESH_TOKEN_EXP_IN_SEC),
    },
    REFRESH_TOKEN_SECRET
  );
}

function getTokenExpiration(expiresInSeconds: number) {
  return Math.floor(Date.now() / 1000) + expiresInSeconds;
}

function extractToken(authHeader: string) {
  if (!authHeader) return null;

  const parts = authHeader.split(" ");
  if (parts.length === 2 && parts[0] === "Bearer") {
    return parts[1];
  }

  return null;
}
