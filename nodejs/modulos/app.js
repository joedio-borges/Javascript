const saudacao = require('./meuModulo'); // Importando a função de saudação
const somar = require('./somar'); // Importando a função de soma

const mensagem = saudacao('Joédio'); // Executando a função
console.log(mensagem);
console.log(`Soma: ${somar(2, 3)}`);

