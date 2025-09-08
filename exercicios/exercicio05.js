/*
5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

*/

const inputNumero = prompt("Digite um número (positivo ou negativo):");

const numero = parseFloat(inputNumero);

let resultado;

if (isNaN(numero)) {
  alert("Erro: Você não digitou um número válido.");
} else {
  
  if (numero < 0) {
  
    resultado = numero * 3;
  } else {
  
    resultado = numero * 2;
  }

  
  alert("O resultado é: " + resultado);
}