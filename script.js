let i=0;
//Para aleatorio
 function mezclarPreguntas(){
        for (let k = preguntas.length - 1; k > 0; k--){
            const j = Math.floor(Math.random ()* (k + 1)); [preguntas[k], preguntas[j]]=[preguntas[j], preguntas[k]];
        }
    }


function mostrar(){
    //resultado.innerHTML = "";
    if(i>=preguntas.length){document.getElementById("pregunta").textContent="¡Fin!";return;}let p=preguntas[i];document.getElementById("pregunta").textContent=p.pregunta;let d=document.getElementById("opciones");d.innerHTML="";p.opciones.forEach((o,n)=>{let b=document.createElement("button");b.className="opcion";b.textContent=o;b.onclick=()=>{document.getElementById("resultado").innerHTML=n===p.correcta?"✅ Correcto":"❌ Incorrecto: ✅"+p.opciones[p.correcta];i++;setTimeout(mostrar,800)};
    d.appendChild(b);});
}
    mezclarPreguntas();
    mostrar();