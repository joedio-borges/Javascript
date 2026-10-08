const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar')
const dividir = require('./dividir'); // Importando o módulo

const mensagem = saudacao('Gabriel'); // Executando a função
console.log(mensagem);

const resultado = somar(5, 3); // Executando a função
console.log(resultado);


const resultado4 = dividir(5, 3); // Executando a função
console.log(resultado4);