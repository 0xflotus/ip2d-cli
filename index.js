const { from_str, to_str } = require("ip2d");
const argv = process.argv.slice(2);

console.log(
  argv.indexOf("--ip") > -1
    ? from_str(argv[argv.indexOf("--ip") + 1])
    : to_str(parseInt(argv[0], 10))
);
