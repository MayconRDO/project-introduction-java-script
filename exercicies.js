btnValidar.onclick = function () {

    let nota = fieldNota.value;

    if (!(!isNaN(parseFloat(nota)) && isFinite(nota))) {
        alert('Informe uma nota válida!');
        return;
    }

    if (nota < 0 || nota > 100) {
        alert(`A nota não informada não pode ser menor que 0 ou maior que 100. Valor informado: ${nota}`);
        return;
    }

    let classificacao;
    if (nota >= 90) {
        classificacao = 'A';
    }
    else if (nota >= 80 && nota <= 89) {
        classificacao = 'B';
    }
    else if (nota >= 70 && nota <= 79) {
        classificacao = 'C';
    }
    else if (nota >= 60 && nota <= 69) {
        classificacao = 'D';
    } else {
        classificacao = 'F';
    }

    alert(`A nota informada foi classificada como: ${classificacao}`);

};