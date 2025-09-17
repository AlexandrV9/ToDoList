import dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  clientPort: process.env.CLIENT_PORT || "3000",
  serverPort: process.env.SERVER_PORT || "9000",
};

export const tokens = {
  access: {
    expInSec: 60 * 5,
    secret: process.env.ACCESS_TOKEN_SECRET!,
  },
  refresh: {
    expInSec: 60 * 60 * 24 * 7,
    cookie: "refresh_token",
    secret: process.env.REFRESH_TOKEN_SECRET!,
  },
};
