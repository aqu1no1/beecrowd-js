var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  let [finalValue, firstValue] = lines[i].split(" ");

  finalValue = parseInt(finalValue);
  firstValue = parseInt(firstValue);

  if (firstValue <= 0 || finalValue <= 0) {
    break;
  }

  let sum = 0;
  let array = [];

  let minValue = Math.min(firstValue, finalValue);
  let maxValue = Math.max(firstValue, finalValue);

  for (let j = minValue; j <= maxValue; j++) {
    array.push(j);
    sum += j;
  }

  console.log(`${array.join(" ")} Sum=${sum}`);
}
