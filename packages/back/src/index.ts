import express from "express";
import dotenv from "dotenv";
import { consola } from "consola";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  consola.success(`Server listening on port ${PORT}`);
});
