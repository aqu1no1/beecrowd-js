//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let dias = parseInt(lines[0]);
let meses = 0;
let anos = 0;

while (dias > 365) {
  dias = dias - 365;
  anos++;
}

while (dias > 30) {
  dias = dias - 30;
  meses++;
}

if (dias === 30) {
  console.log("0 ano(s)");
  console.log("1 mes(es)");
  console.log("0 dia(s)");
} else {
  console.log(anos + " ano(s)");
  console.log(meses + " mes(es)");
  console.log(dias + " dia(s)");
}
