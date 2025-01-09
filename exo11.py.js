let livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exuéry",
  annee: 1943
  disponible: True
};
for (let propriete in livre) {
  console.log(propriete + ": " + livre[propriete]);
}

livre.disponible = false;
livre.langue = "français";
console.log("objet livre mis à jour :");
console.log(livre);
