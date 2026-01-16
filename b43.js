var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let [x, y, z] = lines[0].trim().split(" ");
let perimeter = 0;
let area = 0;
x = parseFloat(x);
y = parseFloat(y);
z = parseFloat(z);

if (x + y > z && x + z > y && z + y > x) {
  perimeter = z + y + x;
  console.log("Perimetro = " + perimeter.toFixed(1));
} else {
  area = ((x + y) * z) / 2;
  console.log("Area = " + area.toFixed(1));
}
