var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [start, end] = lines[0].trim().split(" ");
let count = 0;
let aux = 0;

start = parseInt(start);
end = parseInt(end);

if (start === 0 && end && zero) {
  console.log(`O JOGO DUROU 24 HORA(S)`);
} else if (start < end) {
  count = end - start;
  console.log(`O JOGO DUROU ${count} HORA(S)`);
} else {
  aux = 24 - start;
  count = aux + end;
  console.log(`O JOGO DUROU ${count} HORA(S)`);
}
