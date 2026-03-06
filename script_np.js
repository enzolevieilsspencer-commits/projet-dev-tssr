window.localStorage.setItem("compteur", 30);
let compteur = localStorage.getItem("compteur");
console.log(compteur);

document.addEventListener("DOMContentLoaded", () => {
  const formulaireReservation = document.querySelector(
    ".carte-formulaire form"
  );

  const CHOIS = document.getElementById("nb-personnes");
  const NAME_VALUE = NAME.value;

  if (NAME_VALUE.length < 2) {
    const T = document.querySelector("span");
    T.textContent = `Pas assez de caracter`;
    NAME.after(T);
    T.classList.replace("del_err", "err");
  } else {
    const T = document.querySelector("span");
    T.classList.replace("err", "del_err");
  }
});
