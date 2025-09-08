function calcularPagamento(preco, codigo) {
    let valorFinal;

    switch (codigo) {
        case 1:
            valorFinal = preco * 0.9;
            break;
        case 2:
            valorFinal = preco * 0.85;
            break;
        case 3:
            valorFinal = preco;
            break;
        case 4:
            valorFinal = preco * 1.1;
            break;
        default:
            return "Código inválido!";
    }

    return `Preço final: R$ ${valorFinal.toFixed(2)}`;
}


console.log(calcularPagamento(100, 1)); // R$90
console.log(calcularPagamento(100, 4)); // R$110
