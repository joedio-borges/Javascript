const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar');

const mensagem = saudacao('José Antonio'); // Executando a função
console.log(mensagem);

const resultado = somar(5,3); // Executando a função de soma
console.log(resultado);