/* 3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar. */

let numero = parseInt(prompt("Digite um número qualquer:"));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}