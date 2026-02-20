var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  let numero = parseInt(lines[i]);

  if (numero === 0) {
    console.log("NULL");
    continue;
  } else if (numero % 2 === 0 && numero > 0) {
    console.log("EVEN POSITIVE");
    continue;
  } else if (numero % 2 === 0 && numero < 0) {
    console.log("EVEN NEGATIVE");
    continue;
  } else if (numero !== 0 && numero < 0) {
    console.log("ODD NEGATIVE");
    continue;
  } else if (numero !== 0 && numero > 0) {
    console.log("ODD POSITIVE");
    continue;
  }
}
