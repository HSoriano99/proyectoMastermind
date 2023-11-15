muestra1.addEventListener("click", () => {
  sessionStorage.clear();
  let muestra1 = document.getElementById("muestra1");
  let cssMuestra1 = getComputedStyle(muestra1);
  let colorMuestra1 = cssMuestra1.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra1);
});

muestra2.addEventListener("click", () => {
  sessionStorage.clear();
  let muestra2 = document.getElementById("muestra2");
  let cssMuestra2 = getComputedStyle(muestra2);
  let colorMuestra2 = cssMuestra2.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra2);
});

muestra3.addEventListener("click", () => {
  sessionStorage.clear();
  let muestra3 = document.getElementById("muestra3");
  let cssMuestra3 = getComputedStyle(muestra3);
  let colorMuestra3 = cssMuestra3.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra3);
});

muestra4.addEventListener("click", () => {
  sessionStorage.clear();
  let muestra4 = document.getElementById("muestra4");
  let cssMuestra4 = getComputedStyle(muestra4);
  let colorMuestra4 = cssMuestra4.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra4);
});

muestra5.addEventListener("click", () => {
  sessionStorage.clear();
  let muestra5 = document.getElementById("muestra5");
  let cssMuestra5 = getComputedStyle(muestra5);
  let colorMuestra5 = cssMuestra5.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra5);
});
muestra6.addEventListener("click", () => {
  sessionStorage.clear();
  let muestra6 = document.getElementById("muestra6");
  let cssMuestra6 = getComputedStyle(muestra6);
  let colorMuestra6 = cssMuestra6.getPropertyValue("background-color");
  sessionStorage.setItem("ColorElegido", colorMuestra6);
});

color1.addEventListener("click", () => {
  let color1 = document.getElementById("color1");
  color1.style.backgroundColor = sessionStorage.getItem("ColorElegido");
});

color2.addEventListener("click", () => {
  let color2 = document.getElementById("color2");
  color2.style.backgroundColor = sessionStorage.getItem("ColorElegido");
});

color3.addEventListener("click", () => {
  let color3 = document.getElementById("color3");
  color3.style.backgroundColor = sessionStorage.getItem("ColorElegido");
});

color4.addEventListener("click", () => {
  let color4 = document.getElementById("color4");
  color4.style.backgroundColor = sessionStorage.getItem("ColorElegido");
});
