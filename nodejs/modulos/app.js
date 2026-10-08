const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // Importa o módulo

const mensagem = saudacao('Nazário'); // Executando a função
console.log(mensagem);

const resultado = somar(5, 3);
console.log(resultado);