const express = require("express");
const app = express();

// MIDDLEWARE
app.use(express.json());

// read the data :: FROM BODY
app.post("/users", (req, res) => {
  res.json({ msg: "Hello POST METHOD", name: req.body.name });
});

app.listen(3000, () => console.log("server started"));
