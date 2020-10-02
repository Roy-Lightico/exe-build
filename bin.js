const app = require("."); /* the current working directory so that means main.js because of package.json */

app.post("/", (req, res) => {
  console.log("Inside POST route");
  res.send("Hello World!");
});
app.get("/", (req, res) => {
  console.log("Inside GET route");
  res.send("Hello World!");
});
