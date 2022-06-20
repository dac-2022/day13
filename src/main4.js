const fsPromise = require("fs/promises");

const fileName = "/Users/research/Desktop/1.html";
fsPromise.readFile(fileName, { encoding: "utf-8" }).then((data) => {
  console.log(data);
});
