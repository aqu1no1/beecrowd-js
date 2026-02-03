var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let num1 = parseInt(lines[0]);
let num2 = parseInt(lines[1]);
let num3 = parseInt(lines[2]);
let num4 = parseInt(lines[3]);
let num5 = parseInt(lines[4]);

let arrayNumber = [num1, num2, num3, num4, num5];
let even = 0;
let odd = 0;
let p = 0;
let n = 0;

for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }

  if (arrayNumber[i] === 0) {
    continue;
  }

  if (arrayNumber[i] > 0) {
    p++;
  } else {
    n++;
  }
}

console.log(even + " valor(es) par(es)");
console.log(odd + " valor(es) impar(es)");
console.log(p + " valor(es) positivo(s)");
console.log(n + " valor(es) negativo(s)");
