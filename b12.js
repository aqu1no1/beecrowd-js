//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines[0].trim().split(" ");
let pi = 3.14159;

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let triangulo = (a * c) / 2;
let circulo = pi * (c * c);
let trapezio = ((a + b) * c) / 2;
let quadrado = b * b;
let retangulo = a * b;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
