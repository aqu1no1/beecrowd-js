var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let countAlcool = 0;
let countGasolina = 0;
let countDiesel = 0;

for (let i = 0; i < lines.length; i++) {
    let x = parseInt(lines[i]);

  if (isNaN(x)) continue;

  if(!x === 1 || !x === 2 ||!x === 3 ){
    continue
  }

  if(x === 4){
    break;
  }

  if(x === 1){
    countAlcool++
  }

   if(x === 2){
    countGasolina++
  }

   if(x === 3){
    countDiesel++
  }
}


console.log(`MUITO OBRIGADO`);
console.log(`Alcool: ${countAlcool}`);
console.log(`Gasolina: ${countGasolina}`);
console.log(`Diesel: ${countDiesel}`);