import"./ceos-DYM7msus.js";const f=[{message:"RUPTURA TRIPA",options:[{option:"Aumentar duração impulso laser",number:1,correct:!1},{option:"Junta Homocinética do aparelho de corte",number:2,correct:!0},{option:"Trocar papel ponteira",number:3,correct:!1},{option:"Diminuir velocidade",number:4,correct:!1},{option:"Tubo de corte",number:5,correct:!0},{option:"Grupo de corte longitudinal",number:6,correct:!0}]}],m=document.querySelector(".card-status .meter"),v=document.querySelector(".card-meter .meter"),b=document.querySelector(".pushbuttons-container"),L=document.querySelector(".output-message"),k=document.querySelector(".play-game"),I=document.querySelector(".reset"),q=document.querySelector(".start"),R=document.querySelector("#machine-run"),h=document.querySelector("#machine-stop"),S=document.querySelector(".suggestions"),r=document.querySelector(".options-container"),A=document.querySelector(".result-container"),g=document.querySelector(".illustration"),x=document.querySelector("#perna-dir"),w=document.querySelector("#perna-esq");let t=0,P=!1,C=!1,l=!1,E=!1,y=1;const O=()=>{!l||C||(t<8560?(t=t+50,v.innerHTML=`
        <span>${t}</span>
        <p>CPM</p>
`,setTimeout(O,40)):(P=!0,F()))},M=()=>{t>0?(t=t-400,v.innerHTML=`
            <span>${t}</span>
            <p>CPM</p>
    `,setTimeout(M,40)):(t=0,v.innerHTML=`
            <span>0</span>
            <p>CPM</p>
        `,C=!1,l=!1,N())},F=()=>{!P||C||(t=t===8560?8556:8560,v.innerHTML=`
        <span>${t}</span>
        <p>CPM</p>
    `,setTimeout(F,8e3))},N=()=>{l=!1,E=!1,h.play(),R.pause(),m.classList.remove("status-success"),m.classList.add("status-error"),m.querySelector("span").textContent="STOP",q.classList.remove("pushbutton-start-pressed")},U=()=>{p("Aviso: Máquina pronta, pressione Start")},j=()=>{l=!0,O(),q.classList.add("pushbutton-start-pressed"),L.classList.remove("d-flex"),L.classList.add("d-none"),m.classList.add("status-success"),m.querySelector("span").textContent="RUN",R.play(),h.pause()};q.addEventListener("click",()=>{l=!0,E!==!1&&(j(),y==1&&setTimeout(()=>{M(),p("Falha: QUEBRA PAPEL PONTEIRA","status-error"),S.classList.remove("d-none"),b.classList.add("d-none");const e=document.createElement("Button");e.classList.add("btn-option"),e.innerHTML=`
            <span>1</span>
            <p>Conferir cola do papel</p>
            `;const n=document.createElement("Button");n.classList.add("btn-option"),n.innerHTML=`
            <span>2</span>
            <p>Checar parâmetros no caderno de C.L</p>
            `;const a=document.createElement("Button");a.classList.add("btn-option"),a.innerHTML=`
            <span>3</span>
            <p>Tentar resetar e partir a máquina</p>
            `,r.appendChild(e),r.appendChild(n),r.appendChild(a),document.querySelectorAll(".options-container .btn-option").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("status-success")})});const i=document.createElement("button");i.classList.add("btn-primary"),i.textContent="Testar minha solução",r.appendChild(i),i.addEventListener("click",()=>{S.classList.add("d-none"),b.classList.remove("d-none"),r.innerHTML=""}),y=2},6e3),y==2&&setTimeout(D,1e4))});const p=(e,n)=>{L.classList.remove("d-none","status-error","status-success","status-warning"),L.querySelector("h3").textContent=e,L.classList.add("d-flex",n)};I.addEventListener("click",()=>{E=!0,l||(U(),h.pause(),q.classList.remove("pushbutton-start-pressed"),p("Aviso: Máquina pronta, pressione Start","status-warning"))});k.addEventListener("click",()=>{k.classList.add("d-none"),b.classList.remove("d-none"),p("Aviso: Máquina pronta, aguardando reset","status-warning")});function z(e){return Math.floor(Math.random()*e)}const D=()=>{M(),p("Falha: Máquina parada","status-error"),setTimeout(()=>{g.classList.remove("d-none"),g.classList.add("move-illustration"),x.classList.add("walk"),w.classList.add("walkInverse"),$(),setTimeout(()=>{x.classList.remove("walk"),w.classList.remove("walkInverse")},3200)},2e3),b.classList.add("d-none")},Q=document.querySelector(".show-demo"),T=document.querySelector(".video-container");Q.addEventListener("click",()=>{h.pause(),T.classList.remove("d-none");const e=document.querySelector(".video-container video");e.play(),e.addEventListener("ended",()=>{const n=document.createElement("button");n.classList.add("btn-closed"),n.textContent="Fechar demonstração",T.appendChild(n),n.addEventListener("click",()=>{h.play(),T.classList.add("d-none"),g.classList.add("d-none")}),S.classList.remove("d-none");let a,c=0;a=z(f.length);let i=0,d=0,B="<h3> A máquina está parada tente reestabeler usando o CEOS.</h3>";r.innerHTML=B,f[a].options.forEach(o=>{o.correct==!0&&(d+=1)}),p(f[a].message,"status-error"),f[a].options.forEach(o=>{const s=document.createElement("button");s.classList.add("btn-option"),s.setAttribute("data-correct",o.correct),s.innerHTML=`
            <span>${o.number}</span>
            <p>${o.option}</p>
        `,r.appendChild(s),s.addEventListener("click",()=>{i+=1,o.correct==!0?(c+=1,s.classList.add("status-success"),console.log("acertou",c),s.setAttribute("disabled","")):(c-=1,s.classList.add("status-error"),console.log("errou",c),s.setAttribute("disabled",""),s.querySelector("p").style.color="#fff"),i>=d&&u.classList.remove("disabled")})});const u=document.createElement("button");u.classList.add("disabled"),u.textContent="Testar Minha Solução!",u.classList.add("btn-primary"),r.appendChild(u),u.addEventListener("click",()=>{const o=document.createElement("div");A.classList.remove("d-none"),c>=d?(o.innerHTML=`
                <p>Parabéns você acertou, insira seu nome no campo abaixo, tire uma foto desse card e retire seu brinde no Apex</p>
                <form>
                    <label>Nome</label>
                    <input type="text" id="name" />
                </form>
                <img src="/public/assets/images/correto.gif" alt="Emoji feliz" />
            `,setTimeout(j,2e3)):o.innerHTML=`
                <p>Tente outra vez usando as sugestões do CEOS para reestabelecer a máquina.</p>
                <img src="/public/assets/images/errado.gif" alt="Emoji triste" />
            `,document.querySelector(".btn-restart").addEventListener("click",()=>{window.location.reload(!0)}),A.appendChild(o),console.log("resultado",c),S.classList.add("d-none"),b.classList.remove("d-none")})})});var G=50,J="Oi tudo bem? Sua máquina está com problemas, mas eu posso te ajudar. Você já ouviu falar no CEOS? É uma ferramenta nova que o Apex esta implementando aqui na fábrica, com o uso de inteligência artificial, ela pode te ajudar com esse tipo de problema! Que tal ver uma demonstração?";let H=0;function $(){const e=document.querySelector(".chat-container .chat");e.textContent+=J.charAt(H),H++,setTimeout($,G)}
