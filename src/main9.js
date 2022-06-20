const express = require("express");
const app = express();

// localhost:3000/
app.get("/", (req, res) => {
  const ref = { message: "Hellooooooo" };
  res.json(ref);
});

// localhost:3000/posts/
app.get("/posts", (req, res) => {
  const ref = { message: "lets wrinte any message" };
  res.json(ref);
});

app.get("/users", (req, res) => {
  res.json({ msg: "i am user" });
});

app.get("/album", (req, res) => {
  res.json({ msg: "i am album" });
});

app.get("/photos", (req, res) => {
  res.json({ msg: "i am photsoss" });
});

app.listen(3000, () => console.log("server started"));
