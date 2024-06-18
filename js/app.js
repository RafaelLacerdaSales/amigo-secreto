let amigos = [];

function adicionar(){
let nomeAmigos = document.getElementById('nome-amigo');
if(nomeAmigos.value == ''){
    alert('Informe o nome do amigo!');
    return;
} 

let listaAmigos = document.getElementById('lista-amigos');
amigos.push(nomeAmigos.value);
if(listaAmigos.textContent == ''){
    listaAmigos.textContent = nomeAmigos.value;
} else {
    listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigos.value;
}
nomeAmigos.value = '';
}


function sortear() {
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    
    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length -1){
       listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>'
    } else{
         listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>'
    }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

