const itens = [
    { nome: 'Step 4 & 5', categoriaCorreta: '3' },
    { nome: 'SWP & Loss elimination', categoriaCorreta: '4' },
    { nome: 'Coaching on the floor', categoriaCorreta: '1' },  
    { nome: 'Step 5 & 6', categoriaCorreta: '2' },
    { nome: 'E2E Synchronised', categoriaCorreta: '5' }
];

const itensContainer = document.getElementById('itensContainer');

itens.forEach((item, index) => {
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.textContent = item.nome;
    divItem.dataset.index = index;
    divItem.setAttribute('draggable', 'true');

    divItem.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', index);
    });

    itensContainer.appendChild(divItem);
});

const categorias = document.querySelectorAll('.categoria');

categorias.forEach(categoria => {
    categoria.addEventListener('dragover', (e) => e.preventDefault());

    categoria.addEventListener('drop', (e) => {
        audioPlay("pop")
        const indexItem = e.dataTransfer.getData('text/plain');
        const item = document.querySelector(`.item[data-index="${indexItem}"]`);
        categoria.appendChild(item);
    });
});

function verificarCategorias() {
    let acertos = 0;
    itens.forEach((item, index) => {
        const elementoItem = document.querySelector(`.item[data-index="${index}"]`);
        const categoriaPai = elementoItem.parentElement.dataset.categoria;
        
        if (categoriaPai === item.categoriaCorreta) {
            elementoItem.classList.add('correct');
            elementoItem.classList.remove('wrong');
            acertos++;
        } else {
            elementoItem.classList.add('wrong');
            elementoItem.classList.remove('correct');
        }
    });

    if (acertos === itens.length) {
            mostrarMensagemFinal();
    }
}

function mostrarMensagemFinal() {
    audioPlay("applauses")
    confetti()
    setTimeout(() => {
        window.location.href = '../pages/rpg-factory.html'; // Redireciona de volta ao mapa
    }, 4000);
}

function audioPlay(song) {
    const audio = new Audio(`/public/assets/audios/${song}.mp3`);
    audio.play();
}

