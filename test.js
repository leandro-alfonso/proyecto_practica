let rata = document.getElementById("test1")
let hacer = document.getElementById("test2")
let pancho = document.getElementById("test3")
let paty = document.getElementById("test4")
let testss = document.getElementById("tests")
let foot =document.getElementById("footer")
// capturando img
let imgPerro = document.getElementById("imgContento")
let imgDormir = document.getElementById("imgPensar")
let imgPizza = document.getElementById("imgRicos")
let imgEstacion = document.getElementById("imgPensando")
// alert de inicio
 Swal.fire({
    html: `<h1 class="swalTitulo">Hola</h1>
            <p class="swalParrafo">acontinuacion haremos un pequeño test para saber cuanto me conoces</p>`,
    imageUrl: '../img/bienvenido.png',
    imageWidth: 400,
    imageHeight: 260,
    imageAlt: 'Custom image',
    confirmButtonText: "vamos!",
  }).then((result)=>{
    console.log(result)
    if (result.isConfirmed){
        testss.style.display = "block";
        foot.style.display = "block";
    }else{
        alert("error")
    }
})

// arrays que guarda respuestas 
const incorrectoAnimal = []
const incorrectoComidas = []
const incorrectoHace = []
const incorrectoEstacion = []
const dog = []
const summer = []
const dos = []
const food = []

// empezando test : captura de botones
// animales 
let perro = document.getElementById("perro")
console.log(perro)
perro.addEventListener("click",perros)
let gato = document.getElementById("gato")
gato.addEventListener("click",incorrectoAnimales)
let tortuga = document.getElementById("Tortuga")
tortuga.addEventListener("click",incorrectoAnimales)

// que me gusta hacer
let dormir = document.getElementById("dormir")
dormir.addEventListener("click",dormirse)
let comer = document.getElementById("comer")
comer.addEventListener("click",incorrectoHacer)
let salir = document.getElementById("salir")
salir.addEventListener("click",incorrectoHacer)

// estaciones
let verano = document.getElementById("verano")
verano.addEventListener("click",veranos)
let invierno = document.getElementById("invierno")
invierno.addEventListener("click",incorrectoEstaciones)
let otoño = document.getElementById("otoño")
otoño.addEventListener("click",incorrectoEstaciones)
let primavera = document.getElementById("primavera")
primavera.addEventListener("click",incorrectoEstaciones)

// comida
let ensalada = document.getElementById("ensalada")
ensalada.addEventListener("click",incorrectoComida)
let pizza = document.getElementById("pizza")
pizza.addEventListener("click",pizzas)
let hamburguesa = document.getElementById("hamburguesa")
hamburguesa.addEventListener("click",incorrectoComida)
let filetes= document.getElementById("filetes")
filetes.addEventListener("click",incorrectoComida)

// FUNCION RESPUESTA CORRECTA

function perros(){
    Swal.fire({
        icon: 'success',
        html: `<h1 class="swalTitulo">Correcto</h1>
                <p class="swalParrafo">El animal mas fiel que existe</p>`,
        imageUrl: '../img/perro.png',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
        confirmButtonText: "seguir",
      }).then((result)=>{
        console.log(result)
        if (result.isConfirmed){
            let variablePerro = "perro"
            dog.push(variablePerro)
            console.log(dog)
            imgPerro.src = "../img/perro.png"
            rata.style.display = "none";
        }else{
            alert("error")
        }
    })
}

function dormirse(){
    Swal.fire({
        icon: 'success',
        html: `<h1 class="swalTitulo">Correcto</h1>
                <p class="swalParrafo">Nada mas lindo que una siestita</p>`,
        imageUrl: '../img/dormir.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText: "seguir",
      }).then((result)=>{
        console.log(result)
        if (result.isConfirmed){
            let variableDormir = "dormir"
            dos.push(variableDormir)
            console.log(dos)
            imgPensar.src = "../img/dormir.png"
            hacer.style.display = "none";
        }else{
            alert("error")
        }
    })
}

function pizzas(){
    Swal.fire({
        icon: 'success',
        html: `<h1 class="swalTitulo">Correcto</h1>
                <p class="swalParrafo">Lo mas rico que existe</p>`,
        imageUrl: '../img/comida.png',
        imageWidth: 400,
        imageHeight: 270,
        imageAlt: 'Custom image',
        confirmButtonText: "seguir",
      }).then((result)=>{
        console.log(result)
        if (result.isConfirmed){
            let variablePizza = "pizza"
            food.push(variablePizza)
            console.log(food)
            pancho.style.display = "none";
            imgPizza.src = "../img/comida.png"
        }else{
            alert("error")
        }
    })
}

function veranos(){
    Swal.fire({
        icon: 'success',
        html: `<h1 class="swalTitulo">Correcto</h1>
                <p class="swalParrafo">La mejor estacion</p>`,
        imageUrl: '../img/verano.png',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
        confirmButtonText: "seguir",
      }).then((result)=>{
        console.log(result)
        if (result.isConfirmed){
            let variableVerano = "verano"
            summer.push(variableVerano)
            console.log(summer)
            paty.style.display = "none";
            imgEstacion.src = "../img/verano.png"

        }else{
            alert("error")
        }
    })
}


// FUNCIONES SOBRE 1 RESPUESTA INCORRECTA
function incorrectoAnimales(){
    Swal.fire({
        icon: 'error',
        html: `<h1 class="swalTitulo">incorrecto</h1>`,
        imageUrl: '../img/mal.png',
        imageWidth: 400,
        imageHeight: 230,
        imageAlt: 'Custom image',
        confirmButtonText: "continuar!",
      }).then((result)=>{
        console.log(result)
        if (result.isConfirmed){
            let error = "respuesta incorrecta"
            incorrectoAnimal.push(error)
            rata.style.display = "none";
            imgPerro.src = "../img/mal.png"
        }else{
            alert("error")
        }
    })
      
}
function incorrectoHacer(){
    Swal.fire({
        icon: 'error',
        html: `<h1 class="swalTitulo">incorrecto</h1>`,
        imageUrl: '../img/mal.png',
        imageWidth: 400,
        imageHeight: 230,
        imageAlt: 'Custom image',
        confirmButtonText: "continuar!",
      }).then((result)=>{
        console.log(result)
        if (result.isConfirmed){
            let error = "respuesta incorrecta"
           incorrectoHace.push(error)
            hacer.style.display = "none";
            imgPensar.src = "../img/mal.png"
        }else{
            alert("error")
        }
    })
      
}

function incorrectoComida(){
    Swal.fire({
        icon: 'error',
        html: `<h1 class="swalTitulo">incorrecto</h1>`,
        imageUrl: '../img/mal.png',
        imageWidth: 400,
        imageHeight: 230,
        imageAlt: 'Custom image',
        confirmButtonText: "continuar!",
      }).then((result)=>{
        console.log(result)
        if (result.isConfirmed){
            let error = "respuesta incorrecta"
            incorrectoComidas.push(error)
            pancho.style.display = "none";
            imgPizza.src = "../img/mal.png"
        }else{
            alert("error")
        }
    })
      
}

function incorrectoEstaciones(){
    Swal.fire({
        icon: 'error',
        html: `<h1 class="swalTitulo">incorrecto</h1>`,
        imageUrl: '../img/mal.png',
        imageWidth: 400,
        imageHeight: 230,
        imageAlt: 'Custom image',
        confirmButtonText: "continuar!",
      }).then((result)=>{
        console.log(result)
        if (result.isConfirmed){
            let error = "respuesta incorrecta"
            incorrectoEstacion.push(error)
            paty.style.display = "none";
            imgEstacion.src = "../img/mal.png"
        }else{
            alert("error")
        }
    })
      
}

// funciones resultados de todas las respuestas correctas
function resultCorrecto(){
    Swal.fire({
        html: `<h1 class="swalTitulo">Felicidades</h1>
                <p class="swalParrafo">Demostraste conocerme</p>`,
        imageUrl: '../img/enamorado.png',
        imageWidth: 360,
        imageHeight: 290,
        imageAlt: 'Custom image',
        confirmButtonText: "vamos!",
      })
}

// funciones con una respuesta incorrecta

function resultPrimer(){
    Swal.fire({
        html: `<h1 class="swalTitulo">CASI</h1>
                <p class="swalParrafo">3 de 4 ... me agradan mas los perros</p>`,
        imageUrl: '../img/resPerro.png',
        imageWidth: 400,
        imageHeight: 290,
        imageAlt: 'Custom image',
        confirmButtonText: "vamos!",
      })
}

function resultSegundo(){
    Swal.fire({
        html: `<h1 class="swalTitulo">CASI</h1>
                <p class="swalParrafo">3 de 4 , ...me gusta mas dormir</p>`,
        imageUrl: '../img/dormir.png',
        imageWidth: 400,
        imageHeight: 290,
        imageAlt: 'Custom image',
        confirmButtonText: "vamos!",
      })
}

function resultTercero(){
    Swal.fire({
        html: `<h1 class="swalTitulo">CASI</h1>
                <p class="swalParrafo">3 de 4 , ...me gusta mas la pizza</p>`,
        imageUrl: '../img/comida.png',
        imageWidth: 400,
        imageHeight: 290,
        imageAlt: 'Custom image',
        confirmButtonText: "vamos!",
      })
}

function resultCuarto(){
    Swal.fire({
        html: `<h1 class="swalTitulo">CASI</h1>
                <p class="swalParrafo">3 de 4 , ...me gusta mas el verano</p>`,
        imageUrl: '../img/verano.png',
        imageWidth: 380,
        imageHeight: 300,
        imageAlt: 'Custom image',
        confirmButtonText: "vamos!",
      })
}

// funciones sobre 2 respuestas incorrectas
function respIncorrecto(){
    Swal.fire({
        html: `<h1 class="swalTitulo">Que??</h1>
                <p class="swalParrafo">2 de 2 , de verdad?</p>`,
        imageUrl: '../img/que.png',
        imageWidth: 360,
        imageHeight: 290,
        imageAlt: 'Custom image',
        confirmButtonText: "vamos!",
      })
}

// todas las respuestas incorrectas
function todoIncorrecto(){
    Swal.fire({
        html: `<h1 class="swalTitulo">MAL</h1>
                <p class="swalParrafo">Se nota que no me conoces lo suficiente</p>`,
        imageUrl: '../img/molesto.png',
        imageWidth: 360,
        imageHeight: 290,
        imageAlt: 'Custom image',
        confirmButtonText: "vamos!",
      })
}

// capturando boton resultado

let result = document.getElementById("result")
result.addEventListener("click",resultado)

// funcion de resultado final

function resultado(){

 let resp1 = dog
 let resp2 = dos
 let resp3 = food
 let resp4 = summer
 let incorrecto1 = incorrectoAnimal
 let incorrecto2 = incorrectoHace
 let incorrecto3 = incorrectoComidas
 let incorrecto4 = incorrectoEstacion
        if (resp1 == 'perro' && resp2 == `dormir` && resp3==`pizza` && resp4 ==`verano`){
            resultCorrecto()
        }else if (incorrecto1 == `respuesta incorrecta` && resp2 == `dormir` && resp3==`pizza` && resp4 ==`verano`){
            resultPrimer()
        }else if(resp1 == 'perro' && incorrecto2 == `respuesta incorrecta` && resp3==`pizza` && resp4 ==`verano`){
            resultSegundo()
        }else if (resp1 == 'perro' && resp2 == `dormir` && incorrecto3 == `respuesta incorrecta` && resp4 ==`verano`){
            resultTercero()
        }else if(resp1 == 'perro' && resp2 == `dormir` && resp3==`pizza` && incorrecto4 == `respuesta incorrecta`){
            resultCuarto()
        }else if(incorrecto1 == `respuesta incorrecta` && incorrecto2 == `respuesta incorrecta` && resp3==`pizza` && resp4 ==`verano`){
            respIncorrecto()
        }else if( resp1 == 'perro' && incorrecto2 == `respuesta incorrecta` && incorrecto3 == `respuesta incorrecta` && resp4 ==`verano`){
            respIncorrecto()
        }else if(resp1 == 'perro' && resp2 == `dormir` && incorrecto3 == `respuesta incorrecta` && incorrecto4 == `respuesta incorrecta`){
            respIncorrecto()
        }else{
            todoIncorrecto()
        }
    }
