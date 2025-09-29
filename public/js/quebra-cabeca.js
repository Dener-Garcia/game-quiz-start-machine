const imgUrl = '/public/assets/images/beahead.svg'; // Alterar pra sua imagem
const pecasContainer = document.getElementById('puzzlePieces');
const slotsContainer = document.getElementById('puzzleSlots');
const card = document.querySelector('.card')
const main = document.querySelector('main')

// Gerar os slots e as peças
const pecas = [];

for (let i = 0; i < 9; i++) {
    // Cria slots
    const slot = document.createElement('div');
    slot.classList.add('puzzle-slot');
    slot.dataset.posicaoCorreta = i;
    slotsContainer.appendChild(slot);

    // Cria peças
    const peca = document.createElement('div');
    peca.classList.add('puzzle-piece');
    peca.dataset.posicao = i;
    peca.style.backgroundImage = `url(${imgUrl})`;
    peca.style.backgroundPosition = `-${(i % 3) * 133}px -${Math.floor(i / 3) * 133}px`;

    peca.setAttribute('draggable', 'true');

    peca.addEventListener('dragstart', (e) => {
        audioPlay("pop")
        e.dataTransfer.setData('text/plain', i);
    });

    pecas.push(peca);
}

// Embaralha as peças
pecas.sort(() => Math.random() - 0.5);
pecas.forEach(peca => pecasContainer.appendChild(peca));

// Configurar os slots
document.querySelectorAll('.puzzle-slot').forEach(slot => {
    slot.addEventListener('dragover', (e) => e.preventDefault());

    slot.addEventListener('drop', (e) => {
        audioPlay("pickup")
        const pecaId = e.dataTransfer.getData('text/plain');
        const peca = document.querySelector(`.puzzle-piece[data-posicao="${pecaId}"]`);

        // Só permite uma peça por slot
        if (slot.children.length === 0) {
            slot.appendChild(peca);
        }
    });
});

function verificarPuzzle() {
    let acertos = 0;

    document.querySelectorAll('.puzzle-slot').forEach(slot => {
        const peca = slot.firstChild;
        if (peca && peca.dataset.posicao === slot.dataset.posicaoCorreta) {
            slot.classList.add('correct');
            slot.classList.remove('wrong');
            acertos++;
        } else {
            slot.classList.add('wrong');
            slot.classList.remove('correct');
        }
    });

    if (acertos === 9) {
        audioPlay("applauses")
        confetti()
        setTimeout(() => {
           card.classList.remove('d-none')
           main.classList.add('d-none')
        }, 4000);
    }else {
        alert('You are not done yet or your combination is wrong, try again');
    }
}

function audioPlay(song) {
    const audio = new Audio(`/public/assets/audios/${song}.mp3`);
    audio.play();
}