let listaDeAmigos = [];
let historicoDeNomes = [];


 //Adionar um novo participante na lista
 
function adicionarAmigo() {
    const campoNome = document.getElementById('amigo');
    const nomeDigitado = campoNome.value.trim();

    if (nomeDigitado === "") {
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    const nomeJaExisteNaListaAtual = listaDeAmigos.some(amigo => amigo.toLowerCase() === nomeDigitado.toLowerCase());
    if (nomeJaExisteNaListaAtual) {
        alert('Este nome já foi adicionado na lista atual!');
        campoNome.value = '';
        return;
    }

    listaDeAmigos.push(nomeDigitado);
    atualizarListaNaTela();

    const nomeJaExisteNoHistorico = historicoDeNomes.some(nome => nome.toLowerCase() === nomeDigitado.toLowerCase());
    if (!nomeJaExisteNoHistorico) {
        historicoDeNomes.push(nomeDigitado);
        atualizarHistoricoNaTela();
    }

    campoNome.value = '';
    campoNome.focus();
}

   // Realiza o sorteio
function sortearAmigo() {
    if (listaDeAmigos.length < 4) {
        alert('É preciso ter pelo menos 4 participantes para realizar o sorteio!');
        return;
    }

    embaralharArray(listaDeAmigos);

    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const amigoSecreto = (i === listaDeAmigos.length - 1) ? listaDeAmigos[0] : listaDeAmigos[i + 1];
        elementoResultado.innerHTML += `<li>${listaDeAmigos[i]}  ➔  ${amigoSecreto}</li>`;
    }
}


function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

function limparTudo() {
    listaDeAmigos = [];
    historicoDeNomes = [];

    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('lista-historico').innerHTML = '';
}

function atualizarListaNaTela() {
    const elementoLista = document.getElementById('listaAmigos');
    elementoLista.textContent = listaDeAmigos.join(', ');
}

function atualizarHistoricoNaTela() {
    const elementoHistorico = document.getElementById('lista-historico');
    elementoHistorico.textContent = historicoDeNomes.join(', ');
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



