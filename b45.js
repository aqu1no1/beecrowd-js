var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines[0].trim().split(" ");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let triang = [a, b, c];
let aux = 0;

for (let i = 0; i < triang.length; i++) {
  for (let j = 0; j < triang.length; j++) {
    if (triang[j] < triang[j + 1]) {
      aux = triang[j];
      triang[j] = triang[j + 1];
      triang[j + 1] = aux;
    }
  }
}

a = triang[0];
b = triang[1];
c = triang[2];

if (a >= b + c) {
  console.log(`NAO FORMA TRIANGULO`);
} else {
  if (a * a === b * b + c * c) {
    console.log(`TRIANGULO RETANGULO`);
  }
  if (a * a > b * b + c * c) {
    console.log(`TRIANGULO OBTUSANGULO`);
  }
  if (a * a < b * b + c * c) {
    console.log(`TRIANGULO ACUTANGULO`);
  }
  if (a === b && b === c) {
    console.log(`TRIANGULO EQUILATERO`);
  } else {
    if (a === b || a === c || b === c) {
      console.log(`TRIANGULO ISOSCELES`);
    }
  }
}
