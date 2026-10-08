const saudacao = require("./meuModulo"); // Importando o módulo;
const somar = require("./operacoes/somar"); // Importando a função de soma;
const subtrair = require("./operacoes/subtrair"); // Importando a função de subtração;
const dividir = require("./operacoes/dividir"); // Importando a função de divisão;
const multiplicar = require("./operacoes/multiplicar"); // Importando a função de multiplicação;

const mensagem = saudacao("Levi"); // Chamando a função do módulo e passando um argumento;
console.log(mensagem);

const resultado = somar(5, 3); // Chamando a função de soma e passando dois argumentos;
console.log(`O resultado da soma é: ${resultado}`); // Exibindo o resultado da soma no console;

const resultadoSubtracao = subtrair(5, 3); // Chamando a função de subtração e passando dois argumentos;
console.log(`O resultado da subtração é: ${resultadoSubtracao}`); // Exibindo o resultado da subtração no console;

const resultadoDivisao = dividir(5, 3); // Chamando a função de divisão e passando dois argumentos;
console.log(`O resultado da divisão é: ${resultadoDivisao}`); // Exibindo o resultado da divisão no console;

const resultadoMultiplicacao = multiplicar(5, 3); // Chamando a função de multiplicação e passando dois argumentos;
console.log(`O resultado da multiplicação é: ${resultadoMultiplicacao}`); // Exibindo o resultado da multiplicação no console;
