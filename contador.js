//1- Traer o referenciar todos los elementos del html y los vamos a guardar en variables

//Metodos de seleccion
let numerocontador = document.getElementById("numeroContador");
let botonIncemento = document.getElementById("botonIncrementar");
let botonDecremento = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");

//Declarar la variable con un vaor inicial
var valorContador = 0;

//Logica de negocio
function incrementar(){
    valorContador++;
    numerocontador.innerHTML = valorContador;

    if (valorContador === 10){
        mostrarImagen();
    }
}


//funcion decrementar ()
function decrementar(){
    valorContador--;
    numerocontador.innerHTML = valorContador;
}


//funcion Resetear ()
function resetear(){
    valorContador = 0;
    numerocontador.innerHTML = valorContador;
}


//funcion mostrarimagen ()
//La intencion de esta funcion es que cuando sea invocada, recorra el arreglo y tome uno de los elementos de forma aleatoria (index)
function mostrarImagen(){
    var coleccionImagenes = ["./img/meme1.PNG", "./img/meme2.jpg", "./img/meme3.png", "./img/meme4.png"];

    //Generar un indice aleatorio
    let indexRandom = Math.floor(Math.random()* coleccionImagenes.length);

    //Obtener la url o direccion de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    //agrego la url al atributo src que deje vacio en el HTML
    memeRandom.src = urlAleatoria;
    //Cambio la propiedad de vizualizacion (display) a un block
    memeRandom.style.display = "block";
}

//Eventos en los botones

botonIncemento.addEventListener("click", incrementar);
botonDecremento.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);




