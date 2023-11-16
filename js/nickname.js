
let nivelBeginner = document.getElementById("divBeginner");

nivelBeginner.addEventListener("click", () => {
    let nombreJugador = document.getElementById("inputName").value;
    sessionStorage.setItem("nombreJugador", nombreJugador);
    sessionStorage.setItem("nivelElegido", "BEGINNER");
    location.href = "./chooseColor.html";
});


