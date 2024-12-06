let nome = "Diego";
console.log(nome);

console.log("---- var ----");
if (true) {
    let nome = "diegooo";
    console.log("Acessivel dentro do bloco!" + nome);
}
console.log("Acessivel fora do bloco!" + nome); // Funciona, mas pode causar problemas.

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
// console.log(exemploLet); // Erro: exemploLet não está definido.

console.log("---- const ----");
const PI = 3.14; // Valor que não muda
console.log(PI); // 3.14
//PI = 3.15; // Erro: Não é permitido alterar uma const

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
}
escopoLocal();
//console.log(local); // Erro: 'local' é inacessível fora da função