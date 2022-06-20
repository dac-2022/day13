const express = require("express");
const app = express();

// Learnign how to read qurery parameters
// localhost:3000/posts?msg=asdfadsf
app.get("/posts", (req, res) => {
  res.json({ message: `Hello  :: ${req.query.msg}` });
});

app.listen(3000, () => console.log("server started"));
