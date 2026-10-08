function somar(num1, num2) {
    return `A soma de ${num1} e ${num2} é ${num1 + num2}`;
}

//Expotando a função para ser utilizada em outro arquivo
module.exports = somar;