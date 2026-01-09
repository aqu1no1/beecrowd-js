//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var raio = parseFloat(lines[0]);

var areaDoCirculo = 3.14159 * (raio * raio);
console.log("A=" + areaDoCirculo.toFixed(4));
