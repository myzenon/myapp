const express = require("express");
const app = express();

app.use(express.static("./target"));

app.get("/me", (_req, res) => {
  res.send("I am myapp");
});

app.listen(4444, () => {
  console.log("Server started at port 4444");
});
