const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // Importando o módulo
const dividir = require('./dividir'); // Importando o módulo

const mensagem = saudacao('Marjorie'); // Executando a função
console.log(mensagem);

const resultado= somar(5, 3); // Executando a função de soma
console.log(`O resultado da soma é: ${resultado}`);


const resultado2= dividir(6,2); // Executando a função de divisão
console.log(`O resultado da divisão é: ${resultado2}`);l