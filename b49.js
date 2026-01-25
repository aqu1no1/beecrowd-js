var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let typeBones = lines[0].trim();
let family = lines[1].trim();
let food = lines[2].trim();

if (typeBones === "vertebrado" && family === "ave" && food === "carnivoro") {
  console.log(`aguia`);
} else if (
  typeBones === "vertebrado" &&
  family === "ave" &&
  food === "onivoro"
) {
  console.log(`pomba`);
} else if (
  typeBones === "vertebrado" &&
  family === "mamifero" &&
  food === "onivoro"
) {
  console.log(`homem`);
} else if (
  typeBones === "vertebrado" &&
  family === "mamifero" &&
  food === "herbivoro"
) {
  console.log(`vaca`);
} else if (
  typeBones === "invertebrado" &&
  family === "inseto" &&
  food === "hematofago"
) {
  console.log(`pulga`);
} else if (
  typeBones === "invertebrado" &&
  family === "inseto" &&
  food === "herbivoro"
) {
  console.log(`lagarta`);
} else if (
  typeBones === "invertebrado" &&
  family === "anelideo" &&
  food === "hematofago"
) {
  console.log(`sanguessuga`);
} else if (
  typeBones === "invertebrado" &&
  family === "anelideo" &&
  food === "onivoro"
) {
  console.log(`minhoca`);
}
