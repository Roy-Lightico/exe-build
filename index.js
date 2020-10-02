const express = require("express");
const app = express();
const port = 8000;

app.post("/", (req, res) => {
  console.log("Inside POST route");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
