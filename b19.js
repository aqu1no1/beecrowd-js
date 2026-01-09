var input = require("fs").readFileSync("entrada.txt", "utf8");
// var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let secounds = parseInt(lines[0]);
let hours = 0;
let min = 0;
let resSec = 0;

if (secounds < 60) {
  console.log(`0:0:${secounds}`);
} else if (secounds < 3600) {
  min = Math.floor(secounds / 60);
  resSec = secounds % 60;
  console.log(`0:${min}:${resSec}`);
} else {
  hours = Math.floor(secounds / 3600);
  let resto = secounds % 3600;
  min = Math.floor(resto / 60);
  resSec = resto % 60;

  console.log(`${hours}:${min}:${resSec}`);
}
