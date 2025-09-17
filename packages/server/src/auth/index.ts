import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import z, { success } from "zod";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { sign, verify, decode } from "hono/jwt";
import { JwtTokenExpired, JwtTokenInvalid } from "hono/utils/jwt/types";

import bcrypt from "bcrypt";
import { tokens } from "../constants/index.js";

export const auth = new Hono().basePath("/auth");

type User = {
  id: string;
  name: string;
  login: string;
  email: string | null;
  avatar: string | null;
  password: string;
};

const db: { users: User[] } = {
  users: [
    {
      id: "1",
      login: "admin",
      password: await hashPassword("admin"),
      name: "Alexander",
      avatar: null,
      email: null,
    },
  ],
};

auth.get("/", (c) => {
  let accessToken: string | undefined | null = c.req.header("Authorization");

  if (!accessToken) {
    return c.json({ message: "Token not provided", success: false }, 404);
  }

  accessToken = extractToken(accessToken);

  if (!accessToken) {
    return c.json({ message: "Acccess token invalid", success: false }, 404);
  }

  const { payload } = decodeToken(accessToken);

  const user = db.users.find((user) => user.id === payload.id);

  if (!user) {
    return c.json({ message: "User not found", success: false }, 404);
  }

  return c.json({ data: { user }, success: true });
});

auth.post(
  "/sign-in",
  zValidator(
    "json",
    z.object({
      login: z.string(),
      password: z.string(),
    }),
    async (result, c) => {
      if (!result.success) {
        return c.json(result.error, 400);
      }

      const { login, password } = result.data;

      const incorrectResponse = c.json(
        { message: "Login or password is not correct", success: false },
        401
      );

      const user = db.users.find((user) => user.login === login);
      if (!user) return incorrectResponse;

      const isPasswordMatch = comparePassword(password, user.password);
      if (!isPasswordMatch) return incorrectResponse;

      const payload: User = user;

      const accessToken = await generateAccessToken(payload);
      const refreshToken = await generateRefreshToken(payload);

      setCookie(c, tokens.refresh.cookie, refreshToken, {
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        maxAge: tokens.refresh.expInSec,
      });

      return c.json({
        data: {
          accessToken,
          user: {
            id: user.id,
            login: user.login,
            name: user.name,
            avatar: user.avatar,
            email: user.email,
          },
        },
        success: true,
      });
    }
  )
);

auth.post("/sign-up", (c) => {
  return c.json({ message: "success" });
});

auth.get("/refresh", async (c) => {
  const refreshToken = getCookie(c, tokens.refresh.cookie);

  if (!refreshToken) {
    return c.json({ message: "refresh token not found" }, 401);
  }

  try {
    const payload = (await verify(refreshToken, tokens.refresh.secret)) as User;
    const accessToken = await generateAccessToken(payload);

    return c.json({ accessToken });
  } catch (error) {
    switch (true) {
      case error instanceof JwtTokenExpired:
        return c.json({ message: "Refresh token expired" }, 401);

      case error instanceof JwtTokenInvalid:
        return c.json({ message: "Refresh token invalid" }, 401);

      default:
        return c.json({ message: "Unexpected error", error }, 401);
    }
  }
});

auth.post("/sign-out", (c) => {
  deleteCookie(c, tokens.refresh.secret);

  return c.json({ message: "success" });
});

export function generateAccessToken<TData extends Record<string, unknown>>(
  payload: TData
) {
  return sign(
    {
      ...payload,
      exp: getTokenExpiration(tokens.access.expInSec),
    },
    tokens.access.secret
  );
}

export function generateRefreshToken<TData extends Record<string, unknown>>(
  payload: TData
) {
  return sign(
    {
      ...payload,
      exp: getTokenExpiration(tokens.refresh.expInSec),
    },
    tokens.refresh.secret
  );
}

function getTokenExpiration(expiresInSeconds: number) {
  return Math.floor(Date.now() / 1000) + expiresInSeconds;
}

export function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

export function decodeToken(token: string) {
  return decode(token);
}

export function extractToken(authHeader: string) {
  if (!authHeader) return null;

  const parts = authHeader.split(" ");
  if (parts.length === 2 && parts[0] === "Bearer") {
    return parts[1];
  }

  return null;
}
