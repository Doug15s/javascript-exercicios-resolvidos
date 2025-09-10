/* 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e
estado civil seja “CASADA”, solicitar o tempo de casada (anos). */

let nome = prompt("Digite seu nome:");
let sexo = prompt("Digite seu sexo (M/F):").toUpperCase();
let estadoCivil = prompt("Digite seu estado civil (SOLTEIRO/CASADO/CASADA/VIUVO/VIUVA):").toUpperCase();

if (sexo === "F" && estadoCivil === "CASADA") {
    let tempoCasada = parseInt(prompt("Há quantos anos você é casada?"));
    console.log(`${nome}, você é casada há ${tempoCasada} anos.`);
} else {
    console.log(`${nome}, o seu sexo é ${sexo} e seu estado civil é ${estadoCivil}.`);
}