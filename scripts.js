// Menu burger (toutes pages avec header/nav)
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("header nav");

  if (!burger || !nav) {
    return;
  }

  const navList = nav.querySelector("ul");
  const navCta = nav.querySelector(".nav-cta");

  burger.addEventListener("click", () => {
    if (navList) {
      navList.classList.toggle("open");
    }
    if (navCta) {
      navCta.classList.toggle("open");
    }
  });
});
// Bloc de code pour filtrer les plats (page menu)
document.addEventListener("DOMContentLoaded", () => {
  const selectFiltre = document.getElementById("filtre");
  const cartesPlats = document.querySelectorAll(".carte-plat");

  if (selectFiltre && cartesPlats.length > 0) {
    selectFiltre.addEventListener("change", () => {
      const valeur = selectFiltre.value;

      cartesPlats.forEach((carte) => {
        const type = carte.dataset.type;
        if (valeur === "" || valeur === null) {
          carte.style.display = "";
        } else {
          carte.style.display = type === valeur ? "" : "none";
        }
      });
    });
  }
});

// Bloc de code pour valider le formulaire de réservation (page contact)
document.addEventListener("DOMContentLoaded", () => {
  const textePlaces = document.getElementById("places-restantes");
  const CAPACITE_MAX = 30;

  // Initialisation des places au chargement
  if (textePlaces) {
    let places = localStorage.getItem("placesRestantes");

    if (places === null) {
      places = CAPACITE_MAX;
      localStorage.setItem("placesRestantes", places);
    }

    places = Number(places);

    // Si la valeur stockée est invalide ou négative, on réinitialise
    if (Number.isNaN(places) || places < 0) {
      places = CAPACITE_MAX;
      localStorage.setItem("placesRestantes", places);
    }

    if (places > 0) {
      textePlaces.textContent = "Il reste " + places + " places.";
    } else {
      textePlaces.textContent = "Il n'y a plus assez de place.";
    }
  }

  const formulaireReservation = document.querySelector(
    ".carte-formulaire form",
  );

  if (formulaireReservation) {
    formulaireReservation.addEventListener("submit", (event) => {
      event.preventDefault();

      let isValid = true;

      const champPrenom = document.getElementById("prenom");
      const champNom = document.getElementById("nom");
      const champEmail = document.getElementById("email");
      const champTelephone = document.getElementById("telephone");
      const champNbPersonnes = document.getElementById("nb-personnes");
      const champDate = document.getElementById("date");

      // Regex pour le prénom et le nom :
      const regexNomPrenom = /^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,}$/;

      // Regex pour l'email :

      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      // Regex pour le téléphone français :
      const regexTelephone = /^0\d{9}$/;

      // Vérification du prénom
      if (!regexNomPrenom.test(champPrenom.value.trim())) {
        champPrenom.style.border = "1px solid red";
        isValid = false;
      } else {
        champPrenom.style.border = "1px solid green";
      }

      // Vérification du nom
      if (!regexNomPrenom.test(champNom.value.trim())) {
        champNom.style.border = "1px solid red";
        isValid = false;
      } else {
        champNom.style.border = "1px solid green";
      }

      // Vérification de l'email
      if (!regexEmail.test(champEmail.value.trim())) {
        champEmail.style.border = "1px solid red";
        isValid = false;
      } else {
        champEmail.style.border = "1px solid green";
      }

      // Vérification du téléphone
      if (!regexTelephone.test(champTelephone.value.trim())) {
        champTelephone.style.border = "1px solid red";
        isValid = false;
      } else {
        champTelephone.style.border = "1px solid green";
      }

      // Vérification du nombre de personnes (obligatoire)
      if (!champNbPersonnes.value) {
        champNbPersonnes.style.border = "1px solid red";
        isValid = false;
      } else {
        champNbPersonnes.style.border = "1px solid green";
      }
      if (!booking[champDate.value]) {
        booking[champDate.value] = 0;
      }
      booking[champDate.value] += parseInt(champNbPersonnes.value);
      console.log(booking);
    });
  }
});

// Gestion des réservations
const CAPACITE_MAX = 30;
let booking = {
  "10/06/2026": 10,
};
