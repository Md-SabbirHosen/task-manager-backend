const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the home page!");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000!");
});
