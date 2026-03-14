var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines[0].trim());
let y = parseInt(lines[1].trim());

let maior = Math.max(x, y);
let menor = Math.min(x, y);

for (let i = menor + 1; i < maior; i++) {
  if (i % 5 === 2 || i % 5 === 3) {
    console.log(i);
  }
}
