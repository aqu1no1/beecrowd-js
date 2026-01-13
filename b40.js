//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [n1, n2, n3, n4] = lines[0].trim().split(" ");
let result = 0;
let media = 0;

const p1 = 2;
const p2 = 3;
const p3 = 4;
const p4 = 1;

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);

media = (n1 * p1 + n2 * p2 + n3 * p3 + n4 * p4) / 10;
console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7) {
  console.log(`Aluno aprovado.`);
}

if (media < 5) {
  console.log(`Aluno reprovado.`);
}
if (media >= 5 && media <= 6.9) {
  console.log(`Aluno em exame.`);

  let n5 = lines[1].trim().split(" ");

  n5 = parseFloat(n5);

  console.log(`Nota do exame: ${n5.toFixed(1)}`);

  if (n5 >= 5) {
    console.log(`Aluno aprovado.`);
  } else {
    console.log(`Aluno reprovado.`);
  }

  media = (media + n5) / 2;

  console.log(`Media final: ${media.toFixed(1)}`);
}
