let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);
function AsignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    alert("click desde el boton");
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value) ;
        if (numeroUsuario===numeroSecreto){
            AsignarTextoElemento ("p",`acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
            if (numeroUsuario>numeroSecreto){
                AsignarTextoElemento("p" ,"el numero secreto es menor")
            } else{
                AsignarTextoElemento("p" , "el numero secreto es mayor")
            }
            intentos++
            limpiarCaja();
        }

    return
}

function limpiarCaja (){
    document.querySelector (`#valorUsuario`). value= "";
    }

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    // ya sorteamos todos los numero
        if(listaNumerosSorteados.length == numeroMaximo){
            AsignarTextoElemento("p" , "Ya se sortearon todos los numeros posibles")
        }else{    
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    }

function condicionesIniciales(){
    AsignarTextoElemento("h1","Juego Del Numero Secreto¡");
    AsignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    }

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();   
    document.querySelector("#reiniciar").setAttribute("disabled","true");    
}

    
condicionesIniciales();
