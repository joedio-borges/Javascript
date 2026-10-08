const saudacao = require("./meuModulo"); // Importando o módulo
const somar = require("./somar"); //executando a função
const dividir = require("./divisao"); //executando a função

const mensagem = saudacao("Luan"); // Executando a função
console.log(mensagem);

const resultado = somar(5, 3); //executando a função
console.log(resultado);
const resultado2 = dividir(6, 2); //executando a função
console.log(resultado2);