var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [codigo, quant] = lines[0].trim().split(" ");
let result = 0;

codigo = parseInt(codigo);
quant = parseInt(quant);

if (codigo === 1) {
  let price = 4;
  result = price * quant;

  console.log(`Total: R$ ${result.toFixed(2)}`);
}

if (codigo === 2) {
  let price = 4.5;

  result = price * quant;
  console.log(`Total: R$ ${result.toFixed(2)}`);
}

if (codigo === 3) {
  let price = 5;

  result = price * quant;
  console.log(`Total: R$ ${result.toFixed(2)}`);
}

if (codigo === 4) {
  let price = 2;

  result = price * quant;
  console.log(`Total: R$ ${result.toFixed(2)}`);
}

if (codigo === 5) {
  let price = 1.5;

  result = price * quant;
  console.log(`Total: R$ ${result.toFixed(2)}`);
}
