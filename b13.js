var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines[0].trim().split(" ");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;
console.log(maior + " eh o maior");
