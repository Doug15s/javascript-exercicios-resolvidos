function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let condicao;

    if (imc < 18.5) {
        condicao = "Abaixo do peso";
    } else if (imc < 25) {
        condicao = "Peso normal";
    } else if (imc < 30) {
        condicao = "Acima do peso";
    } else {
        condicao = "Obeso";
    }

    return `IMC: ${imc.toFixed(2)} → ${condicao}`;
}


console.log(calcularIMC(70, 1.75));
