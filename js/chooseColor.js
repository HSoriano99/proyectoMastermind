// let cogerColor1 = document.getElementById("muestra1");

// cogerColor1.addEventListener("click", () => {
//   let color = (cogerColor1.style.backgroundColor = "gold");
//   sessionStorage.setItem("ColorElegido", color);
//   console.log(color);
// });

// let ColorElegido1 = document.getElementById("color1");

// ColorElegido1.addEventListener("click", () => {
//     let color = sessionStorage.getItem("ColorElegido");
//   cogerColor1.style.backgroundColor = color;
// });
let color1 = document.getElementById("color1");

muestra1.addEventListener("click", () => {
  let muestra1 = document.getElementById("muestra1");
  let cssMuestra1 = getComputedStyle(muestra1);
  let colorMuestra1 = cssMuestra1.getPropertyValue("background-color");
  console.log(colorMuestra1);

  sessionStorage.setItem("Amarillo", colorMuestra1);
});
