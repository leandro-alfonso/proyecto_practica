// --- Abrir / Cerrar sección de personajes ---
let botonAbrir = document.getElementById("btnAbrir");
let botonCerrar = document.getElementById("btnCerrar");
let seccionPersonajes = document.getElementById("personajeAbri");

botonAbrir.addEventListener("click", () => {
    seccionPersonajes.style.display = "block";
});

botonCerrar.addEventListener("click", () => {
    seccionPersonajes.style.display = "none";
});

// --- Función genérica para cambiar imágenes ---
function cambiarImagen(idElemento, nuevaImagen, delay = 0) {
    const personaje = document.getElementById(idElemento);
    if (delay > 0) {
        setTimeout(() => {
            personaje.src = nuevaImagen;
        }, delay);
    } else {
        personaje.src = nuevaImagen;
    }
}

// --- Goku ---
document.getElementById("goku").addEventListener("click", () => {
    cambiarImagen("goku", "./img/goku.jpg", 400);
});
document.getElementById("gokuFase2").addEventListener("click", () => {
    cambiarImagen("goku", "./img/gokussj.jpg");
});
document.getElementById("gokuFase3").addEventListener("click", () => {
    cambiarImagen("goku", "./img/gokussj3.png");
});
document.getElementById("gokuFase4").addEventListener("click", () => {
    cambiarImagen("goku", "./img/gokussj4.png");
});

// --- Vegeta ---
document.getElementById("vegeta").addEventListener("click", () => {
    cambiarImagen("vegeta", "./img/vegeta.jpg", 400);
});
document.getElementById("veguetaFase1").addEventListener("click", () => {
    cambiarImagen("vegeta", "./img/vegetassj.png");
});
document.getElementById("veguetaFase2").addEventListener("click", () => {
    cambiarImagen("vegeta", "./img/maginvegeta.jpg");
});
document.getElementById("veguetaFase4").addEventListener("click", () => {
    cambiarImagen("vegeta", "./img/vegetass4.png");
});

// --- Trunks ---
document.getElementById("trunks").addEventListener("click", () => {
    cambiarImagen("trunks", "./img/trunks.jpg", 400);
});
document.getElementById("trunksFase").addEventListener("click", () => {
    cambiarImagen("trunks", "./img/trunkssj.jpg");
});

// --- Gohan ---
document.getElementById("gohan").addEventListener("click", () => {
    cambiarImagen("gohan", "./img/gohan.jpg", 400);
});
document.getElementById("gohanFase").addEventListener("click", () => {
    cambiarImagen("gohan", "./img/gohanssj.jpg");
});
/* capturo boton para mostrar personajes
let botonAbrir = document.getElementById("btnAbrir") 
botonAbrir.addEventListener("click",abrirPersonajes)
// capturo boton para ocultar personajes
let cerrar = document.getElementById("btnCerrar")
cerrar.addEventListener("click",cerrarPersonajes)
// capturo seccion que contiene mis personajes
let seccionPersonajes = document.getElementById("personajeAbri")
// funcion para ocultar personaje
function cerrarPersonajes(){
    seccionPersonajes.style.display = "none";
}
// funcion para mostrar personaje
function abrirPersonajes(){
    seccionPersonajes.style.display = "block";
}
// personaje goku
let goku = document.getElementById("goku")
goku.addEventListener("click",gokus)

function gokus() {
    setTimeout(()=>{
        goku.src = "./img/goku.jpg"
  },400)
}

let fase2 = document.getElementById("gokuFase2")
fase2.addEventListener("click",gokuFase2)

function gokuFase2(){
    goku.src = "./img/gokussj.jpg"
}

let fase3 = document.getElementById("gokuFase3")
 fase3.addEventListener("click",gokuFase3)

function gokuFase3(){
    goku.src = "./img/gokussj3.png"
}

let fase4 = document.getElementById("gokuFase4")
 fase4.addEventListener("click",gokuFase4)

 function gokuFase4(){
    goku.src = "./img/gokussj4.png"
 }

// personaje vegeta
let vegeta = document.getElementById("vegeta")
vegeta.addEventListener("click",vegetas)

function vegetas(){
    setTimeout(()=>{
          vegeta.src = "./img/vegeta.jpg"
    },400)
}

let vegetassj = document.getElementById("veguetaFase1")
vegetassj.addEventListener("click",vegetaFase1)

function vegetaFase1(){
    vegeta.src = "./img/vegetassj.png"
}

let vegetaMagin = document.getElementById("veguetaFase2")
vegetaMagin.addEventListener("click",vegetaFase2)

function vegetaFase2(){
    vegeta.src = "./img/maginvegeta.jpg"
}

let vegetaFase4= document.getElementById("veguetaFase4")
vegetaFase4.addEventListener("click",veguetaFase4)

function veguetaFase4(){
    vegeta.src = "./img/vegetass4.png"
}

// personaje trunks
let trunks= document.getElementById("trunks")
trunks.addEventListener("click",trunk)

function trunk(){
    setTimeout(()=>{
        trunks.src = "./img/trunks.jpg"
  },400)
}

let trunkssj = document.getElementById("trunksFase")
trunkssj.addEventListener("click",trunkJoven)

function trunkJoven(){
    trunks.src = "./img/trunkssj.jpg"
}

// personaje gohan

let gohan = document.getElementById("gohan")
gohan.addEventListener("click",gohans)

function gohans(){
    setTimeout(()=>{
        gohan.src = "./img/gohan.jpg"
  },400)
}

let gohanssj = document.getElementById("gohanFase")
gohanssj.addEventListener("click",gohansssj)

function gohansssj(){
    gohan.src = "./img/gohanssj.jpg"
}*/
