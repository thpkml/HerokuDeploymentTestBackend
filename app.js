const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World! The server is running.");
});

app.get("/message", (req, res) => {
  res.send("This is a message. BAR!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
