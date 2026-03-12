var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  let num = 0;
  let numQuad = 0;
  let numCube = 0;

  num = i;
  numQuad = i * i;
  numCube = i * i * i;

  console.log(`${num} ${numQuad} ${numCube}`);
}
