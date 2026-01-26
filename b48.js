var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let salary = parseFloat(lines[0]);
let result = 0;
let percentual = 0;
let reajust = 0;

if (salary > 0 && salary <= 400) {
  percentual = 15;

  result = salary * 1.15;
  reajust = salary * 0.15;

  console.log(`Novo salario: ${result.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajust.toFixed(2)}`);
  console.log(`Em percentual: ${percentual} %`);
} else if (salary >= 400.01 && salary <= 800) {
  percentual = 12;

  result = salary * 1.12;
  reajust = salary * 0.12;

  console.log(`Novo salario: ${result.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajust.toFixed(2)}`);
  console.log(`Em percentual: ${percentual} %`);
} else if (salary >= 800.01 && salary <= 1200) {
  percentual = 10;

  result = salary * 1.1;
  reajust = salary * 0.1;

  console.log(`Novo salario: ${result.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajust.toFixed(2)}`);
  console.log(`Em percentual: ${percentual} %`);
} else if (salary >= 1200.01 && salary <= 2000) {
  percentual = 7;

  result = salary * 1.07;
  reajust = salary * 0.07;

  console.log(`Novo salario: ${result.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajust.toFixed(2)}`);
  console.log(`Em percentual: ${percentual} %`);
} else if (salary > 2000) {
  percentual = 4;

  result = salary * 1.04;
  reajust = salary * 0.04;

  console.log(`Novo salario: ${result.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajust.toFixed(2)}`);
  console.log(`Em percentual: ${percentual} %`);
}
