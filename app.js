let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    // Validação de tamanho do nome
    if (amigo.value.trim().length > 20) {
        alert('Nome muito longo! Use no máximo 20 caracteres.');
        return;
    }

    // Validação para não adicionar nomes vazios
    if (amigo.value.trim() === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    // Verificar se o amigo já existe na lista
    if (amigos.includes(amigo.value.trim())) {
        alert('Este amigo já foi adicionado!');
        amigo.value = '';
        return;
    }

    amigos.push(amigo.value);

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    atualizarListaAmigos();
}

// NOVA FUNÇÃO: Atualiza a lista com elementos clicáveis
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';
    
    if (amigos.length === 0) {
        listaAmigos.textContent = '';
        return;
    }
    
    // Criar elementos clicáveis para cada amigo
    amigos.forEach((amigo, index) => {
        // Criar span para cada amigo
        let spanAmigo = document.createElement('span');
        spanAmigo.textContent = amigo;
        spanAmigo.className = 'amigo-clicavel';
        spanAmigo.title = 'Clique para remover';
        spanAmigo.onclick = () => removerAmigo(index);
        
        listaAmigos.appendChild(spanAmigo);
        
        // Adicionar vírgula se não for o último
        if (index < amigos.length - 1) {
            let virgula = document.createElement('span');
            virgula.textContent = ', ';
            listaAmigos.appendChild(virgula);
        }
    });
}

// NOVA FUNÇÃO: Remove amigo da lista
function removerAmigo(index) {
    let nomeAmigo = amigos[index];
    if (confirm(`Tem certeza que deseja remover "${nomeAmigo}" da lista?`)) {
        // Remover o amigo do array
        amigos.splice(index, 1);
        
        // Atualizar a visualização
        atualizarListaAmigos();
        
        // Limpar lista de sorteio se existir
        document.getElementById('lista-sorteio').innerHTML = '';
    }
}


function sortear() {
    // Validações antes do sorteio
    if (amigos.length === 0) {
        alert('Nenhum amigo foi adicionado ainda! Adicione pelo menos 2 pessoas.');
        return;
    }
    
    if (amigos.length === 1) {
        alert('Você só tem 1 pessoa na lista! Para fazer amigo secreto, é necessário pelo menos 2 pessoas.');
        return;
    }

    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    // Limpar completamente os sorteios anteriores
    listaSorteio.innerHTML = '';
    
    // Adicionar um título para o sorteio
    listaSorteio.innerHTML = '<strong>🎁 Resultado do Sorteio:</strong><br><br>';

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '->' + amigos[0] + '<br>';            
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '->' + amigos[i + 1] + '<br>';            
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        //atribuiçao via destructing
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}