// Gera valores aleatórios para o deslocamento
function getRandomOffset() {
    const maxOffset = 120; // Máximo deslocamento em qualquer direção
    return Math.random() * maxOffset * (Math.random() < 0.5 ? -1 : 1);
  }
  
  // Seleciona todos os quadrados
  const squares = document.querySelectorAll('.frame');
  let vezes = 0; // Contador de animações
  
  // Move os quadrados de forma aleatória
  function animateRandom() {
    if (vezes < 10) {
      vezes += 1; // Incrementa o contador
  
      squares.forEach(square => {
        const randomX = getRandomOffset();
        const randomY = getRandomOffset();
  
        // Aplica o deslocamento com transform
        square.style.transform = `translate(${randomX}px, ${randomY}px)`;
      });
      console.log(vezes);
    }
  }
  
  // Intervalo principal de animação
  setInterval(() => {
    if (vezes < 5) {
      // Durante o movimento aleatório
      animateRandom();
    } else {
      // Quando o SVG retorna para a posição inicial
      squares.forEach(square => {
        square.style.transform = 'translate(0, 0)';
      });

  
      // Reinicia o ciclo após 6 segundos
      setTimeout(() => {
        vezes = 0; // Reseta o contador de animações
      }, 4000);
    }
  }, 2000);

  const btnChooseMachine = document.querySelector(".btn-choose-machine")
  const machinesContainer = document.querySelector(".machines")

  btnChooseMachine.addEventListener("click", ()=>{
    machinesContainer.classList.remove("d-none")
  })
  