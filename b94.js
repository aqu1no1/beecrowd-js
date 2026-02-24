var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines[0]);

let total = 0;
let rabbit = 0;
let rat = 0;
let frog = 0;
let percentualRabbit = 0;
let percentualRat = 0;
let percentualFrog = 0;

for (let i = 1; i <= n; i++) {
  let [value, type] = lines[i].split(" ");
  value = parseInt(value);

  if (type === "C") {
    rabbit += value;
  } else if (type === "R") {
    rat += value;
  } else {
    frog += value;
  }

  total += value;
}

percentualFrog = (frog / total) * 100;
percentualRabbit = (rabbit / total) * 100;
percentualRat = (rat / total) * 100;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${rabbit}`);
console.log(`Total de ratos: ${rat}`);
console.log(`Total de sapos: ${frog}`);
console.log(`Percentual de coelhos: ${percentualRabbit.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentualRat.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentualFrog.toFixed(2)} %`);
