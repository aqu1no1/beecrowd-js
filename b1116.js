var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  let [x, y] = lines[i].split(" ");
  let result = 0;

  x = parseInt(x);
  y = parseInt(y);

  if (y === 0) {
    console.log(`divisao impossivel`);
    continue;
  }

  result = x / y;

  console.log(result.toFixed(1));
}
