// While u are using the INBUILD MODULE / DOT is NOT REQUIRED
const fs = require("fs");

const fileName = "/Users/research/Desktop/1.html";
const output = fs.readFileSync(fileName, { encoding: "utf-8" });
console.log(output);
console.log("Hello World");
