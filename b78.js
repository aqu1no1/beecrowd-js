var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines[0]);

for (let i = 1; i <= 10; i++) {
  let result = 0;
  result = n * i;
  console.log(`${i} x ${n} = ${result}`);
}
