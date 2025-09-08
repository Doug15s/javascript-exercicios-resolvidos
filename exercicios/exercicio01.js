/*
01 - Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor
que C.
*/

let A = parseInt(prompt("Digite o primeiro valor:"));
let B = parseInt(prompt("Digite o segundo valor:"));
let C = parseInt(prompt("Digite o terceiro valor:"));

if (A + B < C) {
    console.log(`A soma de ${A} + ${B} é ${A + B}, portanto é menor que ${C}!`);
} else {
    console.log(`A soma de ${A} + ${B} é ${A + B}, portanto não é menor que ${C}!`);
}