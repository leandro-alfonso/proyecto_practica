let rata = document.getElementById("test1")
let hacer = document.getElementById("test2")
let pancho = document.getElementById("test3")
let paty = document.getElementById("test4")
let testss = document.getElementById("tests")
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
    }else{
        alert("error")
    }
})
const incorrectoAnimal = []
const incorrectoComidas = []
const incorrectoHace = []
const incorrectoEstacion = []
const dog = []
const summer = []
const dos = []
const food = []

// empezando test
// animales 
let perro = document.getElementById("perro")
console.log(perro)
perro.addEventListener("click",perros)
let gato = document.getElementById("gato")
gato.addEventListener("click",incorrectoAnimales)
let tortuga = document.getElementById("Tortuga")
tortuga.addEventListener("click",incorrectoAnimales)


// FUNCION RESPUESTA CORRECTA

function perros(){
    Swal.fire({
        icon: 'success',
        html: `<h1 class="swalTitulo">Correcto</h1>
                <p class="swalParrafo">Creo que es el animal mas fiel que existe</p>`,
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
        }else{
            alert("error")
        }
    })
}

// FUNCIONES SOBRE RESPUESTA INCORRECTA
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
        }else{
            alert("error")
        }
    })
      
}

// estaciones
let verano = document.getElementById("verano")
verano.addEventListener("click",veranos)
let invierno = document.getElementById("invierno")
invierno.addEventListener("click",incorrectoEstaciones)
let otoño = document.getElementById("otoño")
otoño.addEventListener("click",incorrectoEstaciones)
let primavera = document.getElementById("primavera")
primavera.addEventListener("click",incorrectoEstaciones)

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
        }else{
            alert("error")
        }
    })
}
// comida
let ensalada = document.getElementById("ensalada")
ensalada.addEventListener("click",incorrectoComida)
let pizza = document.getElementById("pizza")
pizza.addEventListener("click",pizzas)
let hamburguesa = document.getElementById("hamburguesa")
hamburguesa.addEventListener("click",incorrectoComida)
let filetes= document.getElementById("filetes")
filetes.addEventListener("click",incorrectoComida)

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
        }else{
            alert("error")
        }
    })
}

// que me gusta hacer
let dormir = document.getElementById("dormir")
dormir.addEventListener("click",dormirse)
let comer = document.getElementById("comer")
comer.addEventListener("click",incorrectoHacer)
let salir = document.getElementById("salir")
salir.addEventListener("click",incorrectoHacer)

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
        }else{
            alert("error")
        }
    })
}
let result = document.getElementById("result")
result.addEventListener("click",resultado)

function resultado(){
    // for (let electricidad of dog){
    //     let lean = electricidad
    //     console.log(lean)
 let resp1 = dog
 let resp2 = dos
 let resp3 = food
 let resp4 = summer
 let incorrecto1 = incorrectoAnimal
 let incorrecto2 = incorrectoHace
 let incorrecto3 = incorrectoComidas
 let incorrecto4 = incorrectoEstacion
        if (resp1 == 'perro' && resp2 == `dormir` && resp3==`pizza` && resp4 ==`verano`){
            console.log(resp1)
            alert("bien")
        }else if (incorrecto1 == `respuesta incorrecta` && resp2 == `dormir` && resp3==`pizza` && resp4 ==`verano`){
            alert("good")
        }else if(resp1 == 'perro' && incorrecto2 == `respuesta incorrecta` && resp3==`pizza` && resp4 ==`verano`){
            alert("mal")
        }else if (resp1 == 'perro' && resp2 == `dormir` && incorrecto3 == `respuesta incorrecta` && resp4 ==`verano`){
            alert("mal2")
        }else if(resp1 == 'perro' && resp2 == `dormir` && resp3==`pizza` && incorrecto4 == `respuesta incorrecta`){
            alert("mal3")
        }else if(incorrecto1 == `respuesta incorrecta` && incorrecto2 == `respuesta incorrecta` && resp3==`pizza` && resp4 ==`verano`){
            alert("mal4")
        }else if( resp1 == 'perro' && incorrecto2 == `respuesta incorrecta` && incorrecto3 == `respuesta incorrecta` && resp4 ==`verano`){
            alert("mal5")
        }else if(resp1 == 'perro' && resp2 == `dormir` && incorrecto3 == `respuesta incorrecta` && incorrecto4 == `respuesta incorrecta`){
            alert(`mal6`)
        }else{
            alert("fin")
        }
    }

// }

// const respuest = []

// class respuestas {
//     constructor (respuestas1,respuestas2,respuestas3,respuestas4){
//         this.respuestas1 = respuestas1
//         this.respuestas2 = respuestas2
//         this.respuestas3 = respuestas3
//         this.respuestas4 = respuestas4
//     }
// }

// const res1 = new respuestas (variablePerro,variableDormir,variablePizza,variableVerano)
// respuest.push(res1)
// console.log(respuest)

// const arr = [1,2,3,4]

// const arr2 = [...arr]

// arr.forEach((numero)=>{
//     arr2.push(numero)
// })