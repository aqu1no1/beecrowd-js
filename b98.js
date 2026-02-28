var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let j = 1;
let k = 5;
let a = 1;
for (let i = 0; i <= 2; i += 0.2) {
  for (j = i + a; j <= k; j) {
    console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`);
    a++;
    if (a === 3) {
      a = 0;
    }
  }
}
