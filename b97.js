var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let j = 7;
let k = 0;
for (let i = 1; i <= 9; i += 2) {
  for (k = j - 2; j >= k; j--) {
    console.log(`I=${i} J=${j}`);
  }
  j += 5;
}
