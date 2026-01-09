var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let money = parseInt(lines[0]);
let value = money;
let countHundred = 0;
let countFity = 0;
let countTwenty = 0;
let countTen = 0;
let countFive = 0;
let countTwo = 0;
let countOne = 0;

if (money >= 100) {
  while (money >= 100) {
    money -= 100;
    countHundred++;
  }
}
if (money >= 50) {
  while (money >= 50) {
    money -= 50;
    countFity++;
  }
}
if (money >= 20) {
  while (money >= 20) {
    money -= 20;
    countTwenty++;
  }
}
if (money >= 10) {
  while (money >= 10) {
    money -= 10;
    countTen++;
  }
}
if (money >= 5) {
  while (money >= 5) {
    money -= 5;
    countFive++;
  }
}
if (money >= 2) {
  while (money >= 2) {
    money -= 2;
    countTwo++;
  }
}
if (money >= 1) {
  while (money >= 1) {
    money -= 1;
    countOne++;
  }
}

console.log(value);
console.log(countHundred + " nota(s) de R$ 100,00");
console.log(countFity + " nota(s) de R$ 50,00");
console.log(countTwenty + " nota(s) de R$ 20,00");
console.log(countTen + " nota(s) de R$ 10,00");
console.log(countFive + " nota(s) de R$ 5,00");
console.log(countTwo + " nota(s) de R$ 2,00");
console.log(countOne + " nota(s) de R$ 1,00");
