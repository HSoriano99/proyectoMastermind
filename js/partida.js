//traigo del session storage el nombre y el nivel para poder pintarlos en pantalla

let cambiarNombreJugador = sessionStorage.getItem("nombreJugador");
let nombreJugador = document.getElementById("tituloPartida");
nombreJugador.innerHTML = `GAME: ${cambiarNombreJugador}`;

let cambiarNivelElegido = sessionStorage.getItem("nivelElegido");
let nivelElegido = document.getElementById("tituloDificultadPartida");
nivelElegido.innerHTML = `LEVEL: ${cambiarNivelElegido}`;

//traigo el array de colores elegidos para jugar para poder seleccionarlos, en este caso, uno por uno.
let arrayColoresElegidos = JSON.parse(
  sessionStorage.getItem("arrayColoresElegidos")
);
console.log("ColoresElegidos " + arrayColoresElegidos);

//pinto los colores elegidos.
let colorParaJugar1 = document.getElementById("colorParaJugar1");
colorParaJugar1.style.backgroundColor = arrayColoresElegidos[0];
let colorParaJugar2 = document.getElementById("colorParaJugar2");
colorParaJugar2.style.backgroundColor = arrayColoresElegidos[1];
let colorParaJugar3 = document.getElementById("colorParaJugar3");
colorParaJugar3.style.backgroundColor = arrayColoresElegidos[2];
let colorParaJugar4 = document.getElementById("colorParaJugar4");
colorParaJugar4.style.backgroundColor = arrayColoresElegidos[3];

//creo un array random con los colores elegidos para posteriormente poder compararlos.
let arrayColoresGanador = arrayColoresElegidos.sort(function () {
  return Math.random() - 0.5;
});
console.log("ColoresGanador " + arrayColoresGanador);

//pintamos nuestra combinación en partida

//seleccionamos primero los colores para la partida con los colores elegidos

colorParaJugar1.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let colorParaJugar1 = document.getElementById("colorParaJugar1");
  let cssColorParaJugar1 = getComputedStyle(colorParaJugar1);
  let colorCssColorParaJugar1 =
    cssColorParaJugar1.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorCssColorParaJugar1);
});

colorParaJugar2.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let colorParaJugar2 = document.getElementById("colorParaJugar2");
  let cssColorParaJugar2 = getComputedStyle(colorParaJugar2);
  let colorCssColorParaJugar2 =
    cssColorParaJugar2.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorCssColorParaJugar2);
});

colorParaJugar3.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let colorParaJugar3 = document.getElementById("colorParaJugar3");
  let cssColorParaJugar3 = getComputedStyle(colorParaJugar3);
  let colorCssColorParaJugar3 =
    cssColorParaJugar3.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorCssColorParaJugar3);
});

colorParaJugar4.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let colorParaJugar4 = document.getElementById("colorParaJugar4");
  let cssColorParaJugar4 = getComputedStyle(colorParaJugar4);
  let colorCssColorParaJugar4 =
    cssColorParaJugar4.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorCssColorParaJugar4);
});

//pintamos nuestra combinación y creamos nuestro array con los colores del jugador.

let arrayColoresJugador = ["", "", "", ""];
let color1Comprobar = document.getElementById("color1Comprobar");

color1Comprobar.addEventListener("click", () => {
  // color1Comprobar = document.getElementById("color1Comprobar");
  color1Comprobar.style.backgroundColor =
    sessionStorage.getItem("ColorElegido");

  let colorComprobar1 = color1Comprobar.style.backgroundColor;
  arrayColoresJugador.splice(0, 1, colorComprobar1);
  console.log(arrayColoresJugador);
});

let color2Comprobar = document.getElementById("color2Comprobar");

color2Comprobar.addEventListener("click", () => {
  // let color2Comprobar = document.getElementById("color2Comprobar");
  color2Comprobar.style.backgroundColor =
    sessionStorage.getItem("ColorElegido");

  let colorComprobar2 = color2Comprobar.style.backgroundColor;
  arrayColoresJugador.splice(1, 1, colorComprobar2);
  console.log(arrayColoresJugador);
});

let color3Comprobar = document.getElementById("color3Comprobar");

color3Comprobar.addEventListener("click", () => {
  // let color3Comprobar = document.getElementById("color3Comprobar");
  color3Comprobar.style.backgroundColor =
    sessionStorage.getItem("ColorElegido");

  let colorComprobar3 = color3Comprobar.style.backgroundColor;
  arrayColoresJugador.splice(2, 1, colorComprobar3);
  console.log(arrayColoresJugador);
});

let color4Comprobar = document.getElementById("color4Comprobar");

color4Comprobar.addEventListener("click", () => {
  // let color4Comprobar = document.getElementById("color4Comprobar");
  color4Comprobar.style.backgroundColor =
    sessionStorage.getItem("ColorElegido");

  let colorComprobar4 = color4Comprobar.style.backgroundColor;
  arrayColoresJugador.splice(3, 1, colorComprobar4);
  console.log(arrayColoresJugador);
});

//validamos nuestra combinación, si gano pasamos pantalla winner, si pierdo se crea otro intento y se generan los aciertos en el intento hecho.
console.log("arrayColoresJugador " + arrayColoresJugador);
//traemos nuestros divs para validar los ciertos.
let acierto1 = document.getElementById("resultado1Comprobar");
let acierto2 = document.getElementById("resultado2Comprobar");
let acierto3 = document.getElementById("resultado3Comprobar");
let acierto4 = document.getElementById("resultado4Comprobar");
let arrayAciertos = [acierto1, acierto2, acierto3, acierto4];
//creamos un array y asignamos 0 o 1 a ese array para luego poder asignar color cuando sea 1 el valor del elemento del array.
let aciertos = [];

const verificarAciertos = (aciertos) => {
  for (let j = 0; j < arrayColoresJugador.length; j++) {
    if (arrayColoresJugador[j] == arrayColoresGanador[j]) {
      // aciertos[j] = "1";
      aciertos.splice(j, 1, "1");
    } else {
      // aciertos[j] = "0";
      aciertos.splice(j, 1, "0");
    }
  }
  return aciertos;
};

//creamos una funcion para asignar el color del acierto o error a cada elemento del array.(verde acierto y rojo error)
const pintarAciertos = (aciertos) => {
  for (let i = 0; i < arrayColoresJugador.length; i++) {
    if (aciertos[i] == "1") {
      arrayAciertos[i].style.backgroundColor = "green";
    } else {
      arrayAciertos[i].style.backgroundColor = "red";
    }
  }
};


//validamos con el boton, pintando el color del acierto y mostrando o redirigiendo si hemos ganado.

//CREAMOS UNA VARIABLE PARA ALMACENAR NUESTROS INTENTOS.
let contadorIntentos = 0;

botonCheckColors.addEventListener("click", () => {
  verificarAciertos(aciertos);
  pintarAciertos(aciertos);
  console.log("array de aciertos " + aciertos);
  console.log("arrayColoresJugador " + arrayColoresJugador);
  //INCREMENTAMOS NUESTRO CONTADOR DE INTENTOS CADA VEZ QUE VALIDAMOS LOS COLORES.
  contadorIntentos++;
  console.log(contadorIntentos);

  //Utilizamos JSON.stringify para poder comparar el contenido de los arrays correctamente.
  if (
    JSON.stringify(arrayColoresJugador) === JSON.stringify(arrayColoresGanador)
  ) {
    location.href = "./winner.html";
  } else if (contadorIntentos == 10) {
    //UTILIZAMOS NUESTRO CONTADOR PARA DETERMINAR CUANDO PIERDES LA PARTIDA.
    location.href = "./loser.html";
  }
});
