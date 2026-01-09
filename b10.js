var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");

var lines = input.split("\n");

let [peca1, numPeca1, valorPeca1] = lines[0].trim().split(" ");
let [peca2, numPeca2, valorPeca2] = lines[1].trim().split(" ");

numPeca1 = parseInt(numPeca1);
numPeca2 = parseInt(numPeca2);
valorPeca1 = parseFloat(valorPeca1);
valorPeca2 = parseFloat(valorPeca2);

let result = numPeca1 * valorPeca1 + numPeca2 * valorPeca2;

console.log("VALOR A PAGAR: R$ " + result.toFixed(2));
