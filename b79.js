var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines[0]);

for (let i = 0; i < n; i++) {
  let [num1, num2, num3] = lines[i + 1].trim().split(" ");

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);

  let media = 0;

  media = num1 * 2 + num2 * 3 + num3 * 5;
  media = media / 10;
  console.log(media.toFixed(1));
}
