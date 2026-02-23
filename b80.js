var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let compare = 0;
let pos = 0;
for (let i = 0; i < 100; i++) {
  let num = parseInt(lines[i]);

  if (num > compare) {
    compare = num;
    pos = i + 1;
  }
}

console.log(compare);
console.log(pos);
