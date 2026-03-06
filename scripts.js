// Bloc de code pour filtrer les plats
document.addEventListener("DOMContentLoaded", () => {
  const selectFiltre = document.getElementById("filtre");
  const cartesPlats = document.querySelectorAll(".carte-plat");

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
});

// Bloc de code pour valider le formulaire de réservation
