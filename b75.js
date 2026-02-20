var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines[0]);

for (let i = 1; i + 1 < 10000; i++) {
  if (i % n === 2) {
    console.log(i);
  }
}
