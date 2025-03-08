let amigos = []

function adicionarAmigo() {
    const nomeAmigo = document.querySelector('#amigo').value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    return;
    }

    amigos.push(nomeAmigo);

    document.querySelector('#amigo').value = "";

    atualizarListaAmigos();

}

function atualizarListaAmigos() {
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function exibirAmigos() {
    const lista = document.querySelector('#amigo');

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

    



