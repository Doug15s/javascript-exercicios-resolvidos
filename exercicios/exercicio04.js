/*
Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, 
caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma 
variável C e mostrar seu conteúdo na tela.
*/



const inputA = prompt("Por favor, digite o valor de A:");
const inputB = prompt("Agora, digite o valor de B:");

const A = parseInt(inputA);
const B = parseInt(inputB);
let C;

// Validação: Verifica se os valores inseridos são números válidos.
if (isNaN(A) || isNaN(B)) {

    alert("Erro: Por favor, digite apenas números válidos.");

} else {
  if (A === B) {
    C = A + B;
  } else {
    C = A * B;
  }

  
  alert("O resultado do cálculo é: " + C);
  console.log("O resultado em C é: " + C);
}
