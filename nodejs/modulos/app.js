const saudacao = require('./meuModulo'); // Importando o módulo
const somar =require('./somar');
const dividir =require('./dividir');

const mensagem = saudacao('Joédio'); // Executando a função
console.log(mensagem);

const resultado = somar(5,3);
console.log(resultado);

const resultado2 = dividir(10,5);
console.log(resultado2);
