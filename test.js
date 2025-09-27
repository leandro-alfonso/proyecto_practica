let animals = document.getElementById("test1")
let hacer = document.getElementById("test2")
let comidas = document.getElementById("test3")
let estacion = document.getElementById("test4")
let testss = document.getElementById("tests")
let foot = document.getElementById("footer")

// capturando imágenes
let imgPerro = document.getElementById("imgContento")
let imgDormir = document.getElementById("imgPensar")
let imgPizza = document.getElementById("imgRicos")
let imgEstacion = document.getElementById("imgPensando")

// variables de respuestas
let resp1 = null
let resp2 = null
let resp3 = null
let resp4 = null

// alerta de inicio
Swal.fire({
  html: `<h1 class="swalTitulo">Hola</h1>
         <p class="swalParrafo">A continuación haremos un pequeño test para saber cuánto me conoces</p>`,
  imageUrl: '../img/bienvenido.png',
  imageWidth: 400,
  imageHeight: 260,
  imageAlt: 'Custom image',
  confirmButtonText: "Vamos!"
}).then((result)=>{
  if(result.isConfirmed){
    testss.style.display = "block"
    foot.style.display = "block"
  } else {
    alert("error")
  }
})

// ------------------- FUNCIONES PARA RESPUESTAS CORRECTAS -------------------

// animales
let perro = document.getElementById("perro")
perro.addEventListener("click", () => {
  Swal.fire({
    icon: 'success',
    html: `<h1 class="swalTitulo">Correcto</h1>
           <p class="swalParrafo">El animal más fiel que existe</p>`,
    imageUrl: '../img/perro.png',
    imageWidth: 400,
    imageHeight: 250,
    confirmButtonText: "Seguir"
  }).then((result)=>{
    if(result.isConfirmed){
      resp1 = "perro"
      imgPerro.src = "../img/perro.png"
      animals.style.display = "none"
    }
  })
})

let gato = document.getElementById("gato")
gato.addEventListener("click", () => { resp1 = "incorrecto"; incorrecto("animals", imgPerro) })
let tortuga = document.getElementById("Tortuga")
tortuga.addEventListener("click", () => { resp1 = "incorrecto"; incorrecto("animals", imgPerro) })

// hobbies
let dormir = document.getElementById("dormir")
dormir.addEventListener("click", () => {
  Swal.fire({
    icon: 'success',
    html: `<h1 class="swalTitulo">Correcto</h1>
           <p class="swalParrafo">Nada más lindo que una siestita</p>`,
    imageUrl: '../img/dormir.png',
    imageWidth: 400,
    imageHeight: 200,
    confirmButtonText: "Seguir"
  }).then((result)=>{
    if(result.isConfirmed){
      resp2 = "dormir"
      imgDormir.src = "../img/dormir.png"
      hacer.style.display = "none"
    }
  })
})

let comer = document.getElementById("comer")
comer.addEventListener("click", () => { resp2 = "incorrecto"; incorrecto("hacer", imgDormir) })
let salir = document.getElementById("salir")
salir.addEventListener("click", () => { resp2 = "incorrecto"; incorrecto("hacer", imgDormir) })

// comida
let pizza = document.getElementById("pizza")
pizza.addEventListener("click", () => {
  Swal.fire({
    icon: 'success',
    html: `<h1 class="swalTitulo">Correcto</h1>
           <p class="swalParrafo">Lo más rico que existe</p>`,
    imageUrl: '../img/comida.png',
    imageWidth: 400,
    imageHeight: 270,
    confirmButtonText: "Seguir"
  }).then((result)=>{
    if(result.isConfirmed){
      resp3 = "pizza"
      imgPizza.src = "../img/comida.png"
      comidas.style.display = "none"
    }
  })
})

let ensalada = document.getElementById("ensalada")
ensalada.addEventListener("click", () => { resp3 = "incorrecto"; incorrecto("comidas", imgPizza) })
let hamburguesa = document.getElementById("hamburguesa")
hamburguesa.addEventListener("click", () => { resp3 = "incorrecto"; incorrecto("comidas", imgPizza) })
let filetes = document.getElementById("filetes")
filetes.addEventListener("click", () => { resp3 = "incorrecto"; incorrecto("comidas", imgPizza) })

// estaciones
let verano = document.getElementById("verano")
verano.addEventListener("click", () => {
  Swal.fire({
    icon: 'success',
    html: `<h1 class="swalTitulo">Correcto</h1>
           <p class="swalParrafo">La mejor estación</p>`,
    imageUrl: '../img/verano.png',
    imageWidth: 400,
    imageHeight: 250,
    confirmButtonText: "Seguir"
  }).then((result)=>{
    if(result.isConfirmed){
      resp4 = "verano"
      imgEstacion.src = "../img/verano.png"
      estacion.style.display = "none"
    }
  })
})

let invierno = document.getElementById("invierno")
invierno.addEventListener("click", () => { resp4 = "incorrecto"; incorrecto("estacion", imgEstacion) })
let otoño = document.getElementById("otoño")
otoño.addEventListener("click", () => { resp4 = "incorrecto"; incorrecto("estacion", imgEstacion) })
let primavera = document.getElementById("primavera")
primavera.addEventListener("click", () => { resp4 = "incorrecto"; incorrecto("estacion", imgEstacion) })

// ------------------- FUNCION COMUN PARA INCORRECTO -------------------
function incorrecto(seccion, imagen){
  Swal.fire({
    icon: 'error',
    html: `<h1 class="swalTitulo">Incorrecto</h1>`,
    imageUrl: '../img/mal.png',
    imageWidth: 400,
    imageHeight: 230,
    confirmButtonText: "Continuar!"
  }).then((result)=>{
    if(result.isConfirmed){
      if(seccion === "animals") animals.style.display = "none"
      if(seccion === "hacer") hacer.style.display = "none"
      if(seccion === "comidas") comidas.style.display = "none"
      if(seccion === "estacion") estacion.style.display = "none"
      imagen.src = "../img/mal.png"
    }
  })
}

// ------------------- RESULTADOS -------------------
function resultCorrecto()
{ Swal.fire(
    {html:`<h1 class="swalTitulo">Felicidades</h1>
        <p class="swalParrafo">Demostraste conocerme</p>`,
        imageUrl:'../img/enamorado.png',
        imageWidth:360,
        imageHeight:290,
        confirmButtonText:"Vamos!"
    }) 
}

function resultPrimer()
{ Swal.fire(
    {
     html:`<h1 class="swalTitulo">CASI</h1><p class="swalParrafo">3 de 4 ... me agradan más los perros</p>`,
     imageUrl:'../img/resPerro.png',
     imageWidth:400,
     imageHeight:290,
     confirmButtonText:"Vamos!"
    })
 }

function resultSegundo()
{ Swal.fire
    ({
    html:`<h1 class="swalTitulo">CASI</h1><p class="swalParrafo">3 de 4 ... me gusta más dormir</p>`,
    imageUrl:'../img/dormir.png',
    imageWidth:400,
    imageHeight:290,
    confirmButtonText:"Vamos!"
    })
 }

function resultTercero()
{ Swal.fire(
    {html:`<h1 class="swalTitulo">CASI</h1><p class="swalParrafo">3 de 4 ... me gusta más la pizza</p>`,
     imageUrl:'../img/comida.png',
     imageWidth:400,
     imageHeight:290,
     confirmButtonText:"Vamos!"
    }) 
}

function resultCuarto()
{ Swal.fire(
    {html:`<h1 class="swalTitulo">CASI</h1><p class="swalParrafo">3 de 4 ... me gusta más el verano</p>`,
     imageUrl:'../img/verano.png',
     imageWidth:380,
     imageHeight:300,
     confirmButtonText:"Vamos!"
    }) 
}

function respIncorrecto()
{ Swal.fire(
    {html:`<h1 class="swalTitulo">Que??</h1><p class="swalParrafo">2 de 2 , de verdad?</p>`,
     imageUrl:'../img/que.png',
     imageWidth:360,
     imageHeight:290,
     confirmButtonText:"Vamos!"
    }) 
}

function todoIncorrecto()
{ Swal.fire(
    {
     html:`<h1 class="swalTitulo">MAL</h1><p class="swalParrafo">Se nota que no me conoces lo suficiente</p>`,
     imageUrl:'../img/molesto.png',
     imageWidth:360,
     imageHeight:290,
     confirmButtonText:"Vamos!"
    }) 
}

// ------------------- BOTON RESULTADO FINAL -------------------
let result = document.getElementById("result")
result.addEventListener("click", () => {
  if(resp1 === "perro" && resp2 === "dormir" && resp3 === "pizza" && resp4 === "verano"){
    resultCorrecto()
  } else if(resp1 === "incorrecto" && resp2 === "dormir" && resp3 === "pizza" && resp4 === "verano"){
    resultPrimer()
  } else if(resp1 === "perro" && resp2 === "incorrecto" && resp3 === "pizza" && resp4 === "verano"){
    resultSegundo()
  } else if(resp1 === "perro" && resp2 === "dormir" && resp3 === "incorrecto" && resp4 === "verano"){
    resultTercero()
  } else if(resp1 === "perro" && resp2 === "dormir" && resp3 === "pizza" && resp4 === "incorrecto"){
    resultCuarto()
  } else if(
    (resp1 === "incorrecto" && resp2 === "incorrecto" && resp3 === "pizza" && resp4 === "verano" ) ||
    (resp1 === "perro" && resp2 === "dormir" && resp3 === "incorrecto" && resp4 === "incorrecto")
  ){
    respIncorrecto()
  } else {
    todoIncorrecto()
  }
})
