/*
6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.
*/


const inputA = prompt("Digite o primeiro valor booleano ('true' ou 'false'):");
const inputB = prompt("Digite o segundo valor booleano ('true' ou 'false'):");

// Converte a string digitada para um valor booleano real
// A comparação (inputA === 'true') resulta em `true` ou `false`
const valorA = (inputA === 'true');
const valorB = (inputB === 'true');

// Exibe os valores convertidos para o usuário ver
alert(`Você digitou: A = ${valorA}, B = ${valorB}`);

// Compara os dois valores booleanos
if (valorA === valorB) {
  alert("Ambos os valores são iguais!");
} else {
  alert("Os valores são diferentes.");
}


