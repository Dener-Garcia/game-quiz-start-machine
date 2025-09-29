

const icones = [
    'SELF SUFFICIENT TEAM 👩‍🏭', 
    'TOUCHLESS PRODUCTION 🗠', 
    'DIGITALLY ENABLED 🖵', 
    'E2E SYNCHRONIZATION ↔️'
];
let cartas = [...icones, ...icones]; // 6 pares
let cartasViradas = [];
let cartasAcertadas = [];

const tabuleiro = document.getElementById('tabuleiro');

cartas = cartas.sort(() => Math.random() - 0.5);

// Criar cartas no tabuleiro
cartas.forEach((icone, index) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.icone = icone;
    carta.dataset.index = index;
    carta.textContent = icone; // Mostra no começo
    tabuleiro.appendChild(carta);
});

// Após 3 segundos, esconde tudo
setTimeout(() => {
    audioPlay("turn")
    document.querySelectorAll('.carta').forEach(carta => carta.textContent = '');
}, 3000);

tabuleiro.addEventListener('click', (e) => {
    const carta = e.target;
    if (!carta.classList.contains('carta') || carta.classList.contains('acertou') || cartasViradas.length >= 2) return;
    audioPlay("pop")
    carta.textContent = carta.dataset.icone;
    carta.classList.add('virada');
    cartasViradas.push(carta);

    if (cartasViradas.length === 2) {
        verificarPares();
    }
});

function verificarPares() {
    const [carta1, carta2] = cartasViradas;

    if (carta1.dataset.icone === carta2.dataset.icone) {
        setTimeout(() => {
            audioPlay("correct")
            carta1.classList.add('acertou');
            carta2.classList.add('acertou');
            cartasAcertadas.push(carta1, carta2);
            cartasViradas = [];
        }, 300);
    } else {
        setTimeout(() => {
            audioPlay("error")
            carta1.textContent = '';
            carta2.textContent = '';
            carta1.classList.remove('virada');
            carta2.classList.remove('virada');
            cartasViradas = [];
        }, 1000);
    }
}

function verificarSolucao() {
    if (cartasAcertadas.length === cartas.length) {
        audioPlay("applauses")
        confetti()
        setTimeout(() => {
            window.location.href = '../pages/rpg-factory.html'; // Redireciona de volta ao mapa
        }, 4000);
    }else {
        alert('You are not done yet');
    }
}

function audioPlay(song) {
    const audio = new Audio(`/public/assets/audios/${song}.mp3`);
    audio.play();
}

