const fs = require("fs");

const fileName = "/Users/research/Desktop/1.htmlttt";

fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

console.log("Hello World");
