//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines[0].trim().split(" ");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let calcBhaskaraResultOne = 0;
let calcBhaskaraResultTwo = 0;
let delta = 0;

delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0 || a === 0) {
  console.log("Impossivel calcular");
} else {
  calcBhaskaraResultOne = (-b - Math.sqrt(delta)) / (2 * a);
  calcBhaskaraResultTwo = (-b + Math.sqrt(delta)) / (2 * a);

  console.log(`R1 = ${calcBhaskaraResultTwo.toFixed(5)}`);
  console.log(`R2 = ${calcBhaskaraResultOne.toFixed(5)}`);
}
