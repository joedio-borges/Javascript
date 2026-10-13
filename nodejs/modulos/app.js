const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar');

const mensagem = saudacao('Sophia'); // Executando a função
console.log(mensagem);

const resultado = somar(5, 3); // Executando a função de soma
console.log(`O resultado da soma é: ${resultado}`);

const dividir = require('./dividir'); // Importando o módulo de divisão

const resultado1 = dividir(10, 2);
console.log(`O resultado da divisão é: ${resultado1}`);