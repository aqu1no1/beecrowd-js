var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let j = [7, 6, 5];
let i = 1;
let count = 0;
let intervalo = 0;
let change = 0;

while (count < 15) {
  if (intervalo === j.length) {
    intervalo = 0;
    change++;

    if (change === 1) i = 3;
    if (change === 2) i = 5;
    if (change === 3) i = 7;
    if (change === 4) i = 9;
  }

  console.log(`I=${i} J=${j[intervalo]}`);
  count++;
  intervalo++;
}
