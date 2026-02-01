var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [h1, m1, h2, m2] = input.trim().split(" ").map(Number);

let inicio = h1 * 60 + m1;
let fim = h2 * 60 + m2;

if (fim <= inicio) {
  fim += 24 * 60;
}

let duracao = fim - inicio;

let horas = Math.floor(duracao / 60);
let minutos = duracao % 60;

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
