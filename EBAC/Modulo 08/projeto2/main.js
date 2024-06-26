const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Celebrando"/>';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Chorando"/>'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resulado aprovado">Aprovado</>'
const spanReprovado = '<span class="resulado reprovado">Reprovado</>'
const notaMinima = parseFloat(prompt ("DIgite a nota minima: "));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    atualizaTabela();
    atualizaMediaFinal();
    // alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.valye}`);
});

function adicionarlinha(){
    
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat.inputNotaAtividade.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinimas ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? 'spanAprovado' : 'spanReprovado';

}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.lenght;
}