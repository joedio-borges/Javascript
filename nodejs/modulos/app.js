const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // Importando outro módulo

const mensagem = saudacao('Joédio'); // Executando a função
console.log(mensagem);

const resultado = somar(5, 3); // Executando a função de soma
console.log(resultado);

const resultado2 = dividir(20, 4); // Executando a função de divisão com outros valores
console.log(resultado2);