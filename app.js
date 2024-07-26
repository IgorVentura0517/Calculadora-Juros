
function calcular() {

    let valor = parseFloat(document.getElementById('valorEntrada').value);
    let porcentagem = parseFloat(document.getElementById('porcentagemEntrada').value);

    if (isNaN(valor) || isNaN(porcentagem)) {
        alert("Por favor, insira valores numéricos válidos nos campos.");
        return;
    }

    let valorComJuros = calculoJuros(valor, porcentagem);

    let capturandoPorcentagem = document.getElementById('div_porcentagem');
    capturandoPorcentagem.innerHTML = `
        <p>Porcentagem atribuída: ${porcentagem}%</p>
        <p>Valor com juros: ${valorComJuros.toFixed(2)}</p>
    `;


    document.getElementById('valorEntrada').value = '';
    document.getElementById('porcentagemEntrada').value = '';
}

function calculoJuros(real, taxa) {
    let resultado = real + ((real * taxa) / 100);
    return resultado;
}


function apagar(){
    document.getElementById('valorEntrada').value = '';
    document.getElementById('porcentagemEntrada').value = '';

    let capturandoPorcentagem = document.getElementById('div_porcentagem');
    capturandoPorcentagem.innerHTML = `
        <p>Porcentagem atribuída: </p>
        <p>Valor com juros: </p>
    `;

}