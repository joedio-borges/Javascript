const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // importa o módulo

const mensagem = saudacao('Joédio'); // Executando a função
console.log(mensagem);

const resultado = somar (5,3); // executando a função
console.log(resultado)