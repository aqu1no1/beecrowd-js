var input = require("fs").readFileSync("entrada.txt", "utf8");
// var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let money = Math.round(parseFloat(lines[0]) * 100);

let hundred = 0;
let fifty = 0;
let twenty = 0;
let ten = 0;
let five = 0;
let two = 0;
let one = 0;
let fiftyCents = 0;
let twentyFiveCents = 0;
let tenCents = 0;
let fiveCents = 0;
let oneCents = 0;

while (money >= 10000) {
  money -= 10000;
  hundred++;
}

while (money >= 5000) {
  money -= 5000;
  fifty++;
}

while (money >= 2000) {
  money -= 2000;
  twenty++;
}

while (money >= 1000) {
  money -= 1000;
  ten++;
}

while (money >= 500) {
  money -= 500;
  five++;
}

while (money >= 200) {
  money -= 200;
  two++;
}

while (money >= 100) {
  money -= 100;
  one++;
}

while (money >= 50) {
  money -= 50;
  fiftyCents++;
}

while (money >= 25) {
  money -= 25;
  twentyFiveCents++;
}

while (money >= 10) {
  money -= 10;
  tenCents++;
}

while (money >= 5) {
  money -= 5;
  fiveCents++;
}

while (money >= 1) {
  money -= 1;
  oneCents++;
}

console.log("NOTAS:");
console.log(hundred + " nota(s) de R$ 100.00");
console.log(fifty + " nota(s) de R$ 50.00");
console.log(twenty + " nota(s) de R$ 20.00");
console.log(ten + " nota(s) de R$ 10.00");
console.log(five + " nota(s) de R$ 5.00");
console.log(two + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(one + " moeda(s) de R$ 1.00");
console.log(fiftyCents + " moeda(s) de R$ 0.50");
console.log(twentyFiveCents + " moeda(s) de R$ 0.25");
console.log(tenCents + " moeda(s) de R$ 0.10");
console.log(fiveCents + " moeda(s) de R$ 0.05");
console.log(oneCents + " moeda(s) de R$ 0.01");
