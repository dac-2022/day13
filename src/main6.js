const fsPromise = require("fs/promises");

async function main() {
  try {
    const fileName = "/Users/research/Desktop/1.html";
    const data = await fsPromise.readFile(fileName, { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

main();
