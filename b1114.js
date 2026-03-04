var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let realPassword = 2002;

for (let i = 0; i < lines.length; i++) {
  let [password] = lines[i].split(" ");

  password = parseInt(password);

  if (password === realPassword) {
    console.log(`Acesso Permitido`);
    break;
  } else {
    console.log(`Senha Invalida`);
  }
}
