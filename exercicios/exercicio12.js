function calcularMediaAluno(id, n1, n2, n3, me) {
    const ma = (n1 + n2 * 2 + n3 * 3 + me) / 7;
    let conceito, status;

    if (ma >= 90) conceito = "A";
    else if (ma >= 75) conceito = "B";
    else if (ma >= 60) conceito = "C";
    else if (ma >= 40) conceito = "D";
    else conceito = "E";

    status = (conceito === "A" || conceito === "B" || conceito === "C") ? "Aprovado" : "Reprovado";

    return {
        aluno: id,
        notas: [n1, n2, n3],
        mediaExercicios: me,
        mediaAproveitamento: ma.toFixed(2),
        conceito,
        status
    };
}


console.log(calcularMediaAluno(123, 80, 70, 90, 85));
