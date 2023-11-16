let arrayColoresElegidos =  JSON.parse(sessionStorage.getItem("arrayColoresElegidos"));
console.log(arrayColoresElegidos);

// let arrayColoresElegidos = [
//   "rgb(255, 215, 0)",
//   "rgb(0, 0, 255)",
//   "rgb(0, 128, 0)",
//   "rgb(255, 0, 0)",
// ];

let colorParaJugar1 = document.getElementById("colorParaJugar1");
colorParaJugar1.style.backgroundColor = arrayColoresElegidos[0];
let colorParaJugar2 = document.getElementById("colorParaJugar2");
colorParaJugar2.style.backgroundColor = arrayColoresElegidos[1];
let colorParaJugar3 = document.getElementById("colorParaJugar3");
colorParaJugar3.style.backgroundColor = arrayColoresElegidos[2];
let colorParaJugar4 = document.getElementById("colorParaJugar4");
colorParaJugar4.style.backgroundColor = arrayColoresElegidos[3];


let cambiarNombreJugador = sessionStorage.getItem("nombreJugador");
let nombreJugador = document.getElementById("tituloPartida");
nombreJugador.innerHTML = `GAME: ${cambiarNombreJugador}`;


let cambiarNivelElegido = sessionStorage.getItem("nivelElegido");
let nivelElegido = document.getElementById("tituloDificultadPartida");
nivelElegido.innerHTML = `LEVEL: ${cambiarNivelElegido}`;



