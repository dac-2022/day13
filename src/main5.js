const fsPromise = require("fs/promises");

async function main() {
  const fileName = "/Users/research/Desktop/1.html";
  const data = await fsPromise.readFile(fileName, { encoding: "utf-8" });
  console.log(data);
}

main();
