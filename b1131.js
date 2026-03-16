var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let countGrenais = 0;
let countWinInter = 0;
let countWinGremio = 0;
let countDraw = 0;
let i = 0;
do {
  let [inter, gremio] = lines[i].trim().split(" ");
  inter = parseInt(inter);
  gremio = parseInt(gremio);

  if (inter > gremio) {
    countWinInter++;
  } else if (gremio > inter) {
    countWinGremio++;
  } else {
    countDraw++;
  }

  countGrenais++;

  console.log(`Novo grenal (1-sim 2-nao)`);
  i++;

  let choose = parseInt(lines[i].trim());

  i++;

  if (choose === 2) {
    break;
  }
} while (i < lines.length);

console.log(`${countGrenais} grenais`);
console.log(`Inter: ${countWinInter}`);
console.log(`Gremio: ${countWinGremio}`);
console.log(`Empates: ${countDraw}`);

if (countWinInter > countWinGremio) {
  console.log("Inter venceu mais");
} else if (countWinGremio > countWinInter) {
  console.log("Gremio venceu mais");
} else {
  console.log("Nao houve vencedor");
}
