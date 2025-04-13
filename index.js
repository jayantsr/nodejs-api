const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/endpoint", (req, res) => {
  res.send("Reached API Endpoint");
});

app.listen("3000", () => {
  console.log("Server Running on PORT 3000");
});
