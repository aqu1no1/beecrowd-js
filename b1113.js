var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  let [x, y] = lines[i].split(" ");

  x = parseInt(x);
  y = parseInt(y);

  if (x === y) {
    break;
  }

  if (x > y) {
    console.log(`Decrescente`);
  }

  if (y > x) {
    console.log(`Crescente`);
  }
}
