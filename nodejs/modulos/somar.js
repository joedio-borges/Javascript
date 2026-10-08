function somar(num1,num2) {
    return `A soma de ${num1} e ${num2} é ${num1 + num2}`;
}

function dividir(num1,num2) {
    if(num2 === 0) {
        return 'Não é possível dividir por zero!';
    }
    return `A divisão de ${num1} por ${num2} é ${num1 / num2}`;
}
module.exports = { somar, dividir };