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

let arrayColoresJugador = [];

color1Comprobar.addEventListener("click", () => {
  let color1Comprobar = document.getElementById("color1Comprobar");
  color1Comprobar.style.backgroundColor =
    sessionStorage.getItem("ColorElegido");

  let colorComprobar1 = color1Comprobar.style.backgroundColor;
  arrayColoresJugador.splice(0, 1, colorComprobar1);
  console.log(arrayColoresJugador);
});

color2Comprobar.addEventListener("click", () => {
  let color2Comprobar = document.getElementById("color2Comprobar");
  color2Comprobar.style.backgroundColor =
    sessionStorage.getItem("ColorElegido");

  let colorComprobar2 = color2Comprobar.style.backgroundColor;
  arrayColoresJugador.splice(1, 1, colorComprobar2);
  console.log(arrayColoresJugador);
});

color3Comprobar.addEventListener("click", () => {
  let color3Comprobar = document.getElementById("color3Comprobar");
  color3Comprobar.style.backgroundColor =
    sessionStorage.getItem("ColorElegido");

  let colorComprobar3 = color3Comprobar.style.backgroundColor;
  arrayColoresJugador.splice(2, 1, colorComprobar3);
  console.log(arrayColoresJugador);
});

color4Comprobar.addEventListener("click", () => {
  let color4Comprobar = document.getElementById("color4Comprobar");
  color4Comprobar.style.backgroundColor =
    sessionStorage.getItem("ColorElegido");

  let colorComprobar4 = color4Comprobar.style.backgroundColor;
  arrayColoresJugador.splice(3, 1, colorComprobar4);
  console.log(arrayColoresJugador);
});

//validamos nuestra combinación, si gano pasamos pantalla winner, si pierdo se crea otro intento y se generan los resultados en el intento hecho.
console.log("arrayColoresJugador " + arrayColoresJugador);
botonCheckColors.addEventListener("click", () => {
  for (let i = 0; i < arrayColoresJugador.length; i++) {
    if (arrayColoresJugador[i] !== arrayColoresGanador[i]) {
      // let divResultados = document.getElementById("resultadoComprobar");
      // let divsResultados = divResultados.getElementsByTagName("div");
      // console.log(divsResultados);
      // for (let i = 0; i < divsResultados.length; i++) {
      //   divsResultados[i].style.backgroundColor = "purple";
      // }
      // console.log(divsResultados);


      return alert("Has perdido");
    } else {
      location.href = "./winner.html";
    }
  }
});
