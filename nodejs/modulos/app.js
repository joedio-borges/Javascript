const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // Importando o módulo

const mensagem = saudacao('Luany'); // Executando a função
console.log(mensagem);

const resultado = somar(-5,-5); // Executando a função
console.log(resultado);