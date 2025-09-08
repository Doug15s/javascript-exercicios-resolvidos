const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let valores = [];

function perguntaNumero(i) {
  if (i < 3) {
    readline.question(`Digite o número ${i + 1}: `, (input) => {
      const num = parseInt(input);
      valores.push(num);
      perguntaNumero(i + 1);
    });
  } else {
    if (valores[0] === valores[1] || valores[1] === valores[2] || valores[0] === valores[2]) {
      console.log("Por favor, digite números diferentes.");
    } else {
      valores.sort((a, b) => b - a);
      console.log("Ordem decrescente:", valores.join(", "));
    }
    readline.close();
  }
}

perguntaNumero(0);
