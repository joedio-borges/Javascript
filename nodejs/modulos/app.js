const saudacao = require("./meuModulo");
const somar = require("./somar");

const mensagem = saudacao("Miguel");
console.log(mensagem);

const resultado = somar(5, 3);
console.log(resultado);
