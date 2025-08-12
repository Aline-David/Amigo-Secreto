//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];



function adicionarNome(){
    const inputNome = document.getElementById('nome');
    const nomeAmigo = inputNome.value.trim();
    if (nomeAmigo === ''){
        alert ('Digite um nome');
    }else{
        nomes.push(nomeAmigo);
        inputNome.value = '';
        atualizarListaNomes(nomes);
    }
}

function atualizarListaNomes(nomes){
    const listaNomes = document.getElementById('listaNomes');
    listaNomes.innerHTML = '';

    nomes.forEach(nome => {
        const li=document.createElement('li');
        li.textContent=nome ;
        listaNomes.appendChild(li);
    });

}

function sortearNome(){
    if (nomes.length === 0){
        alert ('Não existem nomes para sortear');
        return;
    }

const nomeAleatorio = Math.floor(Math.random()*nomes.length);
const nomeSorteado = nomes[nomeAleatorio];
const resultadoPessoa = document.getElementById('resultado');
resultadoPessoa.innerHTML = (`O amigo sorteado é: ${nomeSorteado}`);
listaNomes.innerHTML = '';

}