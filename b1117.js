var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let validValue = 0;
let quantityOfValue = 0;
let media = 0;

for (let i = 0; i < lines.length; i++) {
  if (quantityOfValue === 2) break;

  let x = parseFloat(lines[i]);

  if (isNaN(x)) continue;

  if (x >= 0 && x <= 10) {
    validValue += x;
    quantityOfValue++;
  } else {
    console.log(`nota invalida`);
  }
}

media = validValue / 2;
console.log(`media = ${media.toFixed(2)}`);
