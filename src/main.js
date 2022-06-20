const config = require("./config");
const config1 = require("./config1");
const config2 = require("./config2");

console.log(config.projectName);
console.log(config.projectVersion);

console.log(config1.ref);
console.log(config1.ref.id);
console.log(config1.list);

// Config2
const output = config2.sum(11, 21);
console.log(output);
