const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require("./somar");

const mensagem = saudacao('Joédio'); // Executando a função
console.log(mensagem);

const resultado = somar(5, 2);
console.log(resultado);