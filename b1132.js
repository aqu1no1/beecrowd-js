var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines[0].trim());
let y = parseInt(lines[1].trim());

let sum = 0;

let maior = Math.max(x, y);
let menor = Math.min(x, y);

for (let i = menor; i < maior; i++) {
  if (i % 13 !== 0) {
    sum += i;
  }
}

console.log(`${sum}`);
