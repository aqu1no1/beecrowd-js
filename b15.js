var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [x1, y1] = lines[0].trim().split(" ");
let [x2, y2] = lines[1].trim().split(" ");

x1 = parseFloat(x1);
y1 = parseFloat(y1);
x2 = parseFloat(x2);
y2 = parseFloat(y2);

let pow1 = Math.pow(x2 - x1, 2);
let pow2 = Math.pow(y2 - y1, 2);
let dist = Math.sqrt(pow1 + pow2);

console.log(dist.toFixed(4));
