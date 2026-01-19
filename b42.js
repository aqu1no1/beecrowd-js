var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines[0].trim().split(" ");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

let aux = 0;
let array = [a, b, c];
let arrayCopy = [...array];

for (let i = 0; i < array.length; i++) {
  if (array[i] > array[i + 1]) {
    aux = array[i];
    array[i] = array[i + 1];
    array[i + 1] = aux;
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] > array[i + 1]) {
    aux = array[i];
    array[i] = array[i + 1];
    array[i + 1] = aux;
  }
}

for (let j = 0; j < array.length; j++) {
  console.log(array[j]);
}

console.log("");

for (let k = 0; k < 3; k++) {
  console.log(arrayCopy[k]);
}
