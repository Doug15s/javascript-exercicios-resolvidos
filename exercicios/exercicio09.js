const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite a altura em metros: ', (alturaInput) => {
  const altura = parseFloat(alturaInput);

  readline.question('Digite o sexo (masculino/feminino): ', (sexoInput) => {
    const sexo = sexoInput.trim().toLowerCase();

    let pesoIdeal;
    if (sexo === 'masculino') {
      pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'feminino') {
      pesoIdeal = (62.1 * altura) - 44.7;
    } else {
      console.log('Sexo inválido');
      readline.close();
      return;
    }

    console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
    readline.close();
  });
});
