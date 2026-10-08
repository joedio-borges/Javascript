const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // Importando o módulo
 
const mensagem = saudacao('Lívia'); // Executando a função
console.log(mensagem);

const resultado = somar(5,3); // Executando a função
console.log(resultado);