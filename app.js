//alcance de la variable  generarNumeroSecreto es global
let numeroSecreto = 0;
//contador
let intentos = 0;
//declarar arreglo
let listaNumerosSorteados = [];
let numeroMaximo = parseInt(prompt('Indicame del 1 hasta que numero deseas jugar:'));

console.log(numeroSecreto);

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';
//funcion nomrbre(parametros. es decir, variables){}
function asignarTextoElemento(elemento, texto){
    //es un objeto, se asigna el h1 (de html) y es un puente
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

//funcion: encapsulamiento de una accion que se va hacer
function verificarIntento(){
    //getElementById es para los id de HTML
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //habilitamos el boton "Nuevo juego" una vez que el usuario acerto
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);*/
    /*con === se comparan ambos valores y tipos de dato
    devolviendo un booleano
        true or false*/
    //console.log(numeroDeUsuario === numeroSecreto);*/

}

function limpiarCaja(){
            //otra forma de llamar por id, el .value es para vaciar el campo
    document.querySelector('#valorUsuario').value = '';
   
}

//para numeros aleatorios
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{

        //si el numero generado esta incluido en la lista (ya existe)
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //volver a ejecutar la funcion (retornarla)
            return generarNumeroSecreto();
        }else{
            //agregar a lista (recursividad)
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    //retorna numero secreto
}

function condicionesIniciales(){

    //para invocar etiquetas del html
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
    

condicionesIniciales();

//es un objeto, se asigna el h1 (de html) y es un puente
//let titulo = document.querySelector('h1');
//se mostrara el texto de '' en h1
//titulo.innerHTML = 'Juego del Numero secreto';

