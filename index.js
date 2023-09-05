const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/test", (req, res) => {
  res.send("<h1>Test</h1>");
});
const port = 3005;
app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});
