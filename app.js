require("dotenv").config();
const express = require("express");
const router = require("./router.js");

const PORT = process.env.USER_HOST_PORT ?? 5050;

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server connected on http://localhost:${PORT}`);
});
