
const boneco = document.getElementById('boneco');
const stands = document.querySelectorAll('.stand');
const botaoJogo = document.getElementById('botaoJogo');

let jogoAtual = null;
let posX = 100
let posY = 100

window.addEventListener('DOMContentLoaded', () => {
    const posXStorage = localStorage.getItem('posX');
    const posYStorage = localStorage.getItem('posY');

    if (posXStorage && posYStorage) {
        posX = parseInt(posXStorage);
        posY = parseInt(posYStorage);

        boneco.style.top = posY + 'px';
        boneco.style.left = posX + 'px';
    }
});



document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp': posY -= 30; 
        boneco.setAttribute("src", "/public/assets/images/player-left.svg");
        audioPlay("walk")
        break;
        case 'ArrowDown': posY += 30; 
        boneco.setAttribute("src", "/public/assets/images/player-right-front.svg");
        audioPlay("walk")
        break;
        case 'ArrowLeft': posX -= 30;
        boneco.setAttribute("src", "/public/assets/images/player-left-front.svg");
        audioPlay("walk")
        break;
        case 'ArrowRight': posX += 30; 
        boneco.setAttribute("src", "/public/assets/images/player-right.svg");
        audioPlay("walk")
        break;
    }
    boneco.style.top = posY + 'px';
    boneco.style.left = posX + 'px';
    verificarProximidade();
});

function verificarProximidade() {
    jogoAtual = null;
    botaoJogo.style.display = 'none';


    stands.forEach(stand => {
        const standRect = stand.getBoundingClientRect();
        const bonecoRect = boneco.getBoundingClientRect();

        const distancia = Math.hypot(
            standRect.left - bonecoRect.left,
            standRect.top - bonecoRect.top
        );

        if (distancia < 60) {
            console.log(stand)
            jogoAtual = stand.dataset.link;
            botaoJogo.style.display = 'block';
            console.log("nome jogo", stand)
            botaoJogo.innerText= stand.dataset.jogo
            audioPlay("yeah")
        }
    });
}

botaoJogo.addEventListener('click', () => {
    botaoJogo.setAttribute("href", jogoAtual)
    localStorage.setItem('posX', posX);
    localStorage.setItem('posY', posY);

    // Redireciona para o link do stand
    window.location.href = jogoAtual;
});

function audioPlay(song) {
    const audio = new Audio(`/public/assets/audios/${song}.mp3`);
    audio.play();
}