const tarefas = [
    { id: 1, texto: '35', statusCorreto: 'MTBF' },
    { id: 2, texto: '66', statusCorreto: 'OEE' },
    { id: 3, texto: '67', statusCorreto: 'NPS' },
    { id: 4, texto: '55', statusCorreto: 'PHASE' }
];

const board = document.querySelector('.kanban-board');

tarefas.forEach(tarefa => {
    const card = document.createElement('div');
    card.classList.add('kanban-card');
    card.textContent = tarefa.texto;
    card.setAttribute('draggable', 'true');
    card.dataset.id = tarefa.id;

    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', tarefa.id);
    });

    board.querySelector('[data-status="MTBF"]').appendChild(card);
});

const colunas = document.querySelectorAll('.kanban-column');

colunas.forEach(coluna => {
    coluna.addEventListener('dragover', (e) => e.preventDefault());

    coluna.addEventListener('drop', (e) => {
        const tarefaId = e.dataTransfer.getData('text/plain');
        const card = document.querySelector(`[data-id="${tarefaId}"]`);
        coluna.appendChild(card);
        audioPlay("drop")
    });
});

function verificarKanban() {
    let acertos = 0;
    tarefas.forEach(tarefa => {
        const card = document.querySelector(`[data-id="${tarefa.id}"]`);
        const coluna = card.parentElement.dataset.status;

        if (coluna === tarefa.statusCorreto) {
            card.classList.add('correct');
            card.classList.remove('wrong');
            acertos += 1
        } else {
            card.classList.add('wrong');
            card.classList.remove('correct');
        }
    });

    if (acertos === tarefas.length) {
        audioPlay("applauses")
        confetti()
        setTimeout(() => {
            window.location.href = '../pages/rpg-factory.html'; // Redireciona de volta ao mapa
        }, 4000);
    }
}

function audioPlay(song) {
    const audio = new Audio(`/public/assets/audios/${song}.mp3`);
    audio.play();
}
