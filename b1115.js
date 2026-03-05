var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  let [x, y] = lines[i].split(" ");

  x = parseInt(x);
  y = parseInt(y);

  if (x === 0 || y === 0) {
    break;
  }

  if (x > 0 && y > 0) {
    console.log(`primeiro`);
  }

  if (x > 0 && y < 0) {
    console.log(`quarto`);
  }

  if (x < 0 && y < 0) {
    console.log(`terceiro`);
  }

  if (x < 0 && y > 0) {
    console.log(`segundo`);
  }
}
