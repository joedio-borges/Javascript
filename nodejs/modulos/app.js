const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); //Importando o módulo

const mensagem = saudacao('João Pedro Friedrich'); // Executando a função
console.log(mensagem);

const resultado = somar(6, 7); // Executando a função
console.log(resultado);