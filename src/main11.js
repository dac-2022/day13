const express = require("express");
const app = express();

app.post("/users", (req, res) => {
  res.json({ msg: "Hello POST METHOD" });
});

app.listen(3000, () => console.log("server started"));
