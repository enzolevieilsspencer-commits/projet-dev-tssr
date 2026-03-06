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

      const regexNomPrenom = /^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,}$/;
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const regexTelephone = /^0\d{9}$/;

      // Prénom
      if (!regexNomPrenom.test(champPrenom.value.trim())) {
        champPrenom.style.border = "1px solid red";
        isValid = false;
      } else {
        champPrenom.style.border = "1px solid green";
      }

      // Nom
      if (!regexNomPrenom.test(champNom.value.trim())) {
        champNom.style.border = "1px solid red";
        isValid = false;
      } else {
        champNom.style.border = "1px solid green";
      }

      // Email
      if (!regexEmail.test(champEmail.value.trim())) {
        champEmail.style.border = "1px solid red";
        isValid = false;
      } else {
        champEmail.style.border = "1px solid green";
      }

      // Téléphone
      if (!regexTelephone.test(champTelephone.value.trim())) {
        champTelephone.style.border = "1px solid red";
        isValid = false;
      } else {
        champTelephone.style.border = "1px solid green";
      }

      // Si tout est valide, on peut afficher un message de confirmation
      if (isValid) {
        const message = document.createElement("div");
        message.textContent = "Votre réservation a bien été prise en compte !";
        message.style.color = "green";
        formulaireReservation.appendChild(message);
      }
    });
  }
});
