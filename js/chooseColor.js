//elegimos los colores de las muestras y asignamos cada color manualmente, en pagina de partida se intenta implementar como función para no alargar el codigo.

muestra1.addEventListener("click", (e) => {
  console.log(e)
  sessionStorage.removeItem("ColorElegido");
  let muestra1 = document.getElementById("muestra1");
  let cssMuestra1 = getComputedStyle(muestra1);
  let colorMuestra1 = cssMuestra1.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra1);
});

muestra2.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let muestra2 = document.getElementById("muestra2");
  let cssMuestra2 = getComputedStyle(muestra2);
  let colorMuestra2 = cssMuestra2.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra2);
});

muestra3.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let muestra3 = document.getElementById("muestra3");
  let cssMuestra3 = getComputedStyle(muestra3);
  let colorMuestra3 = cssMuestra3.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra3);
});

muestra4.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let muestra4 = document.getElementById("muestra4");
  let cssMuestra4 = getComputedStyle(muestra4);
  let colorMuestra4 = cssMuestra4.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra4);
});

muestra5.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let muestra5 = document.getElementById("muestra5");
  let cssMuestra5 = getComputedStyle(muestra5);
  let colorMuestra5 = cssMuestra5.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra5);
});
muestra6.addEventListener("click", () => {
  sessionStorage.removeItem("ColorElegido");
  let muestra6 = document.getElementById("muestra6");
  let cssMuestra6 = getComputedStyle(muestra6);
  let colorMuestra6 = cssMuestra6.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra6);
});

let arrayColoresElegidos = ["","","",""];

color1.addEventListener("click", () => {
  let color1 = document.getElementById("color1");
  color1.style.backgroundColor = sessionStorage.getItem("ColorElegido");

  let colorElegido1 = color1.style.backgroundColor;
  arrayColoresElegidos.splice(0, 1, colorElegido1);
  console.log(arrayColoresElegidos);
});

color2.addEventListener("click", () => {
  let color2 = document.getElementById("color2");
  color2.style.backgroundColor = sessionStorage.getItem("ColorElegido");

  let colorElegido2 = color2.style.backgroundColor;
  arrayColoresElegidos.splice(1, 1, colorElegido2);
  console.log(arrayColoresElegidos);
});

color3.addEventListener("click", () => {
  let color3 = document.getElementById("color3");
  color3.style.backgroundColor = sessionStorage.getItem("ColorElegido");

  let colorElegido3 = color3.style.backgroundColor;
  arrayColoresElegidos.splice(2, 1, colorElegido3);
  console.log(arrayColoresElegidos);
});

color4.addEventListener("click", () => {
  let color4 = document.getElementById("color4");
  color4.style.backgroundColor = sessionStorage.getItem("ColorElegido");

  let colorElegido4 = color4.style.backgroundColor;
  arrayColoresElegidos.splice(3, 1, colorElegido4);
  console.log(arrayColoresElegidos);
});

botonValidarColor.addEventListener("click", () => {
  let botonValidarColor = document.getElementById("botonValidarColor");
  if (arrayColoresElegidos.length == 4) {
    sessionStorage.setItem(
      "arrayColoresElegidos",
      JSON.stringify(arrayColoresElegidos)
    );
    sessionStorage.removeItem("ColorElegido");
    location.href = "./partida.html";
  } else {
    alert("Debe seleccionar 4 colores");
  }
});
