const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // Importando o módulo
const dividir = require('./dividir')

const mensagem = saudacao('Lorenzo'); // Executando a função
console.log(mensagem);

const resultadoSoma = somar(num1, num2); // Executando a função
console.log(resultadoSoma);

const resultadoDividir = dividir(num1, num2); // Executando a função
console.log(resultadoDividir);