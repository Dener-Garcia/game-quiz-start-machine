import questions from "./src/questions/questions.mjs"
const cardStatus = document.querySelector(".card-status .meter")
const cardSpeed = document.querySelector(".card-meter .meter")
const pushbuttonsContainer = document.querySelector(".pushbuttons-container")
const outputMessage = document.querySelector(".output-message")
const playGame = document.querySelector(".play-game")
const pushbuttonReset = document.querySelector(".reset")
const pushbuttonStart = document.querySelector(".start")
const audioMachineRun = document.querySelector("#machine-run")
const audioMachineStop = document.querySelector("#machine-stop")
const suggestions = document.querySelector(".suggestions")
const optionsContainer = document.querySelector(".options-container")
const resultContainer = document.querySelector(".result-container")
const illustrationContainer = document.querySelector(".illustration")
const legRight = document.querySelector("#perna-dir")
const legLeft = document.querySelector("#perna-esq")

let speed = 0
let oscillating = false
let decrementing = false
let machineRunning = false
let machineReady = false
let phase = 1

const incrementSpeed = () => {
    if (!machineRunning || decrementing) return

    if (speed < 360) {
        speed = speed + 1
        cardSpeed.innerHTML = `
        <span>${speed}</span>
        <p>CPM</p>
`
        setTimeout(incrementSpeed, 40)
    } else {
        oscillating = true
        oscillateSpeed()
    }
}

const decrementSpeed = () => {

    if (speed > 0) {
        speed = speed - 10
        cardSpeed.innerHTML = `
            <span>${speed}</span>
            <p>CPM</p>
    `
        setTimeout(decrementSpeed, 50)
    } else {
        speed = 0
        cardSpeed.innerHTML = `
            <span>0</span>
            <p>CPM</p>
        `
        decrementing = false
        machineRunning = false

        stopMachine()
    }
}

const oscillateSpeed = () => {
    if (!oscillating || decrementing) return;

    speed = speed === 360 ? 356 : 360;
    cardSpeed.innerHTML = `
        <span>${speed}</span>
        <p>CPM</p>
    `;
    setTimeout(oscillateSpeed, 400);
};


const stopMachine = () => {
    machineRunning = false
    machineReady = false

    audioMachineStop.play()
    audioMachineRun.pause()

    cardStatus.classList.remove("status-success")
    cardStatus.classList.add("status-error")
    cardStatus.querySelector("span").textContent = "STOP"

    pushbuttonStart.classList.remove("pushbutton-start-pressed")
}

const resetMachine = () => {
    showMessage("Aviso: Máquina pronta, pressione Start")
}

const runMachine = () => {
    machineRunning = true
    incrementSpeed()

    pushbuttonStart.classList.add("pushbutton-start-pressed")
    outputMessage.classList.remove("d-flex")
    outputMessage.classList.add("d-none")
    cardStatus.classList.add("status-success")
    cardStatus.querySelector("span").textContent = "RUN"
    audioMachineRun.play()
    audioMachineStop.pause()
}

pushbuttonStart.addEventListener("click", () => {
    machineRunning = true

    if (machineReady === false) return
    runMachine()
    if (phase == 1) {
        setTimeout(() => {
            decrementSpeed()
            showMessage("Falha: Falta de cigarros no funil", "status-error")

            suggestions.classList.remove("d-none")
            pushbuttonsContainer.classList.add("d-none")

            const optionOneFake = document.createElement("Button")
            optionOneFake.classList.add("btn-option")
            optionOneFake.innerHTML = `
            <span>1</span>
            <p>Fazer na área do fúnil C.I.L</p>
            `   
            const optionTwoFake = document.createElement("Button")
            optionTwoFake.classList.add("btn-option")
            optionTwoFake.innerHTML = `
            <span>2</span>
            <p>Conferir parâmetros no caderno de C.L</p>
            `
            
            const optionThreeFake = document.createElement("Button")
            optionThreeFake.classList.add("btn-option")
            optionThreeFake.innerHTML = `
            <span>3</span>
            <p>Tentar resetar e partir a máquina</p>
            `

            optionsContainer.appendChild(optionOneFake)
            optionsContainer.appendChild(optionTwoFake)
            optionsContainer.appendChild(optionThreeFake)
            
            const buttons = document.querySelectorAll(".options-container .btn-option")

            buttons.forEach((e) => {
                e.addEventListener("click", ()=> {
                    e.classList.add("status-success")
                })
            })

            const btnFakeCheck = document.createElement("button")
            btnFakeCheck.classList.add("btn-primary")
            btnFakeCheck.textContent = "Testar minha solução"

            optionsContainer.appendChild(btnFakeCheck)

            btnFakeCheck.addEventListener("click", ()=>{
                suggestions.classList.add("d-none")
                pushbuttonsContainer.classList.remove("d-none")
                optionsContainer.innerHTML = ""
            })

            phase = 2
        }, 5000);
    }
    if (phase == 2) {
        setTimeout(startAnalize, 10000)
    }
})

const showMessage = (message, status) => {
    outputMessage.classList.remove("d-none", "status-error", "status-success", "status-warning")
    outputMessage.querySelector("h3").textContent = message;
    outputMessage.classList.add("d-flex", status)
}

pushbuttonReset.addEventListener("click", () => {
    machineReady = true
    
    if (!machineRunning) {
        resetMachine()
        audioMachineStop.pause()
        pushbuttonStart.classList.remove("pushbutton-start-pressed")
        showMessage("Aviso: Máquina pronta, pressione Start", "status-warning")
    }
})

playGame.addEventListener("click", () => {
    playGame.classList.add("d-none")
    pushbuttonsContainer.classList.remove("d-none")
    showMessage("Aviso: Máquina pronta, aguardando reset", "status-warning")
})

function randomQuestion(max) {
    return Math.floor(Math.random() * max);
}

const startAnalize = () => {
    decrementSpeed()
    showMessage("Falha: Máquina parada", "status-error")

    setTimeout(()=>{
        illustrationContainer.classList.remove("d-none")

        illustrationContainer.classList.add("move-illustration")
    
        legRight.classList.add("walk")
        legLeft.classList.add("walkInverse")
        autoType()

        setTimeout(()=>{
            legRight.classList.remove("walk")
            legLeft.classList.remove("walkInverse")
        }, 8200)

    },2000)

    pushbuttonsContainer.classList.add("d-none")
}

const btnShowDemo = document.querySelector(".show-demo")
const videoContainer = document.querySelector(".video-container")

btnShowDemo.addEventListener("click", () => {

    audioMachineStop.pause()
    videoContainer.classList.remove("d-none")

    const videoDemo = document.querySelector(".video-container video")

    videoDemo.play()
    
videoDemo.addEventListener("ended", () => {
    const btnCLosed = document.createElement("button");
    btnCLosed.classList.add("btn-closed");
    btnCLosed.textContent = "Fechar demonstração";
    videoContainer.appendChild(btnCLosed);

    btnCLosed.addEventListener("click", () => {
        audioMachineStop.play();
        videoContainer.classList.add("d-none");
        illustrationContainer.classList.add("d-none");
    });

    suggestions.classList.remove("d-none");
    let questionNumber;
    let correctAwnsers = 0;

    questionNumber = randomQuestion(questions.length);

    let tryChoose = 0;
    let optionsTrusty = 0;

    let optionsTitle = `<h3> A máquina está parada tente reestabeler usando o CEOS.</h3>`;
    optionsContainer.innerHTML = optionsTitle;

    const questionOptions = questions[questionNumber].options;

    questionOptions.forEach((e) => {
        if (e.correct == true) {
            optionsTrusty += 1;
        }
    });

    showMessage(questions[questionNumber].message, "status-error");

    const options = questions[questionNumber].options;
    options.forEach((e) => {
        const btnOption = document.createElement("button");
        btnOption.classList.add("btn-option");
        btnOption.setAttribute("data-correct", e.correct);

        btnOption.innerHTML = `
            <span>${e.number}</span>
            <p>${e.option}</p>
        `;

        optionsContainer.appendChild(btnOption);

        btnOption.addEventListener("click", () => {
            tryChoose += 1;

            if (e.correct == true) {
                correctAwnsers += 1;
                btnOption.classList.add("status-success");
                console.log("acertou", correctAwnsers);
                btnOption.setAttribute("disabled", "");
            } else {
                correctAwnsers -= 1;
                btnOption.classList.add("status-error");
                console.log("errou", correctAwnsers);
                btnOption.setAttribute("disabled", "");
                btnOption.querySelector("p").style.color = "#fff";
            }

            if (tryChoose >= optionsTrusty) {
                btnCheckSolution.classList.remove("disabled");
            }
        });
    });

    const btnCheckSolution = document.createElement("button");
    btnCheckSolution.classList.add("disabled");
    btnCheckSolution.textContent = "Testar Minha Solução!";
    btnCheckSolution.classList.add("btn-primary");
    optionsContainer.appendChild(btnCheckSolution);

    // Mova o event listener do botão para fora do loop
    btnCheckSolution.addEventListener("click", () => {
        const result = document.createElement("div");

        resultContainer.classList.remove("d-none");

        if (correctAwnsers >= optionsTrusty) {
            result.innerHTML = `
                <p>Parabéns você acertou, insira seu nome no campo abaixo, tire uma foto desse card e retire seu brinde no Apex</p>
                <form>
                    <label>Nome</label>
                    <input type="text" id="name" />
                </form>
                <img src="./public/assets/correto.gif" alt="Emoji feliz" />
            `;

            setTimeout(runMachine, 2000);
        } else {
            result.innerHTML = `
                <p>Tente outra vez usando as sugestões do CEOS para reestabelecer a máquina.</p>
                <img src="./public/assets/errado.gif" alt="Emoji triste" />
            `;
        }

        const btnRestart = document.querySelector(".btn-restart");

        btnRestart.addEventListener("click", () => {
            window.location.reload(true);
        });

        resultContainer.appendChild(result);
        console.log("resultado", correctAwnsers);

        suggestions.classList.add("d-none");
        pushbuttonsContainer.classList.remove("d-none");
    });
});

})

var speedText = 50
var message = "Oi tudo bem? Sua máquina está com problemas, mas eu posso te ajudar. Você já ouviu falar no CEOS? É uma ferramenta nova que o Apex esta implementando aqui na fábrica, com o uso de inteligência artificial, ela pode te ajudar com esse tipo de problema! Que tal ver uma demonstração?"

let i = 0
function autoType(){
    const text = document.querySelector(".chat-container .chat")
    text.textContent += message.charAt(i)
    i++
    
    setTimeout(autoType,speedText)
}
