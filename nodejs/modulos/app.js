const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // Importando o módulo
const dividir = require('./dividir')

const mensagem = saudacao('Flávio'); // Executando a função
console.log(mensagem);

const resultado = somar(5, 3); //Executando a função
console.log(resultado)

const resultadoDiv = dividir(8, 2)
console.log(resultadoDiv)