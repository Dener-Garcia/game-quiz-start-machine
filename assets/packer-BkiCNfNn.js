import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */const f=[{message:"CIGARROS DESARRUMADOS NA BOLSA",options:[{option:"Trocar faca do colarinho",number:1,correct:!1},{option:"Correia de caixinha",number:2,correct:!0},{option:"Ajustar 2ª Roda",number:3,correct:!1},{option:"Diminuir velocidade",number:4,correct:!1},{option:"Tampa do hopper",number:5,correct:!0},{option:"Agitadores",number:6,correct:!0}]}],m=document.querySelector(".card-status .meter"),v=document.querySelector(".card-meter .meter"),b=document.querySelector(".pushbuttons-container"),L=document.querySelector(".output-message"),A=document.querySelector(".play-game"),P=document.querySelector(".reset"),q=document.querySelector(".start"),O=document.querySelector("#machine-run"),h=document.querySelector("#machine-stop"),S=document.querySelector(".suggestions"),r=document.querySelector(".options-container"),k=document.querySelector(".result-container"),T=document.querySelector(".illustration"),x=document.querySelector("#perna-dir"),R=document.querySelector("#perna-esq");let t=0,H=!1,g=!1,l=!1,M=!1,y=1;const F=()=>{!l||g||(t<360?(t=t+1,v.innerHTML=`
        <span>${t}</span>
        <p>CPM</p>
`,setTimeout(F,40)):(H=!0,j()))},E=()=>{t>0?(t=t-10,v.innerHTML=`
            <span>${t}</span>
            <p>CPM</p>
    `,setTimeout(E,50)):(t=0,v.innerHTML=`
            <span>0</span>
            <p>CPM</p>
        `,g=!1,l=!1,$())},j=()=>{!H||g||(t=t===360?356:360,v.innerHTML=`
        <span>${t}</span>
        <p>CPM</p>
    `,setTimeout(j,400))},$=()=>{l=!1,M=!1,h.play(),O.pause(),m.classList.remove("status-success"),m.classList.add("status-error"),m.querySelector("span").textContent="STOP",q.classList.remove("pushbutton-start-pressed")},z=()=>{p("Aviso: Máquina pronta, pressione Start")},D=()=>{l=!0,F(),q.classList.add("pushbutton-start-pressed"),L.classList.remove("d-flex"),L.classList.add("d-none"),m.classList.add("status-success"),m.querySelector("span").textContent="RUN",O.play(),h.pause()};q.addEventListener("click",()=>{l=!0,M!==!1&&(D(),y==1&&setTimeout(()=>{E(),p("Falha: FALTA DE CIGARROS NO FUNIL","status-error"),S.classList.remove("d-none"),b.classList.add("d-none");const e=document.createElement("Button");e.classList.add("btn-option"),e.innerHTML=`
            <span>1</span>
            <p>Fazer C.I.L na área do fúnil</p>
            `;const n=document.createElement("Button");n.classList.add("btn-option"),n.innerHTML=`
            <span>2</span>
            <p>Conferir parâmetros no caderno de C.L</p>
            `;const a=document.createElement("Button");a.classList.add("btn-option"),a.innerHTML=`
            <span>3</span>
            <p>Tentar resetar e partir a máquina</p>
            `,r.appendChild(e),r.appendChild(n),r.appendChild(a),document.querySelectorAll(".options-container .btn-option").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("status-success")})});const c=document.createElement("button");c.classList.add("btn-primary"),c.textContent="Testar minha solução",r.appendChild(c),c.addEventListener("click",()=>{S.classList.add("d-none"),b.classList.remove("d-none"),r.innerHTML=""}),y=2},5e3),y==2&&setTimeout(G,1e4))});const p=(e,n)=>{L.classList.remove("d-none","status-error","status-success","status-warning"),L.querySelector("h3").textContent=e,L.classList.add("d-flex",n)};P.addEventListener("click",()=>{M=!0,l||(z(),h.pause(),q.classList.remove("pushbutton-start-pressed"),p("Aviso: Máquina pronta, pressione Start","status-warning"))});A.addEventListener("click",()=>{A.classList.add("d-none"),b.classList.remove("d-none"),p("Aviso: Máquina pronta, aguardando reset","status-warning")});function B(e){return Math.floor(Math.random()*e)}const G=()=>{E(),p("Falha: Máquina parada","status-error"),setTimeout(()=>{T.classList.remove("d-none"),T.classList.add("move-illustration"),x.classList.add("walk"),R.classList.add("walkInverse"),I(),setTimeout(()=>{x.classList.remove("walk"),R.classList.remove("walkInverse")},3200)},2e3),b.classList.add("d-none")},U=document.querySelector(".show-demo"),C=document.querySelector(".video-container");U.addEventListener("click",()=>{h.pause(),C.classList.remove("d-none");const e=document.querySelector(".video-container video");e.play(),e.addEventListener("ended",()=>{const n=document.createElement("button");n.classList.add("btn-closed"),n.textContent="Fechar demonstração",C.appendChild(n),n.addEventListener("click",()=>{h.play(),C.classList.add("d-none"),T.classList.add("d-none")}),S.classList.remove("d-none");let a,i=0;a=B(f.length);let c=0,d=0,N="<h3> A máquina está parada tente reestabeler usando o CEOS.</h3>";r.innerHTML=N,f[a].options.forEach(o=>{o.correct==!0&&(d+=1)}),p(f[a].message,"status-error"),f[a].options.forEach(o=>{const s=document.createElement("button");s.classList.add("btn-option"),s.setAttribute("data-correct",o.correct),s.innerHTML=`
            <span>${o.number}</span>
            <p>${o.option}</p>
        `,r.appendChild(s),s.addEventListener("click",()=>{c+=1,o.correct==!0?(i+=1,s.classList.add("status-success"),console.log("acertou",i),s.setAttribute("disabled","")):(i-=1,s.classList.add("status-error"),console.log("errou",i),s.setAttribute("disabled",""),s.querySelector("p").style.color="#fff"),c>=d&&u.classList.remove("disabled")})});const u=document.createElement("button");u.classList.add("disabled"),u.textContent="Testar Minha Solução!",u.classList.add("btn-primary"),r.appendChild(u),u.addEventListener("click",()=>{const o=document.createElement("div");k.classList.remove("d-none"),i>=d?(o.innerHTML=`
                <p>Parabéns você acertou, insira seu nome no campo abaixo, tire uma foto desse card e retire seu brinde no Apex</p>
                <form>
                    <label>Nome</label>
                    <input type="text" id="name" />
                </form>
                <img src="/public/assets/images/correto.gif" alt="Emoji feliz" />
            `,setTimeout(D,2e3)):o.innerHTML=`
                <p>Tente outra vez usando as sugestões do CEOS para reestabelecer a máquina.</p>
                <img src="/public/assets/images/errado.gif" alt="Emoji triste" />
            `,document.querySelector(".btn-restart").addEventListener("click",()=>{window.location.reload(!0)}),k.appendChild(o),console.log("resultado",i),S.classList.add("d-none"),b.classList.remove("d-none")})})});var Q=50,V="Oi tudo bem? Sua máquina está com problemas, mas eu posso te ajudar. Você já ouviu falar no CEOS? É uma ferramenta nova que o Apex esta implementando aqui na fábrica, com o uso de inteligência artificial, ela pode te ajudar com esse tipo de problema! Que tal ver uma demonstração?";let w=0;function I(){const e=document.querySelector(".chat-container .chat");e.textContent+=V.charAt(w),w++,setTimeout(I,Q)}
