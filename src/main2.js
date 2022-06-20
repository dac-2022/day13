const fs = require("fs");

const fileName = "/Users/research/Desktop/1.html";

fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});

console.log("Hello World");
