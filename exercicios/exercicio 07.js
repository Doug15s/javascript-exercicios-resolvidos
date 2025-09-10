const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número: ', (input) => {
  const x = parseInt(input);

  let resultado;
  if (x % 2 === 0) {
    resultado = x + 5;
  } else {
    resultado = x + 8;
  }

  console.log('Resultado:', resultado);
  readline.close();
});
