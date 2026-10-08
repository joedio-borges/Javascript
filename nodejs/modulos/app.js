const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); //Impoertando o módulo

const mensagem = saudacao('luiz'); // Executando a função
console.log(mensagem);

const resultado = somar(8,6); // Executando a função
console.log(resultado);