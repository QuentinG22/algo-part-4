// Générateur de note aléatoire
function generateurNote() {
    min = Math.ceil(0) // Valeur minimum qui est inclue
    max = Math.floor(21) // Valeur maximum qui est exclue

    return Math.floor(Math.random() * (max - min)) // retourne une valeur entier entre 0 et 20

}

function affichageTableau(obj) {
    let affichage = 'Contenu des matières:\n\n';
    for (let i in obj) {
        affichage += "Matière: " + i + " -> notes: " + obj[i] + "\n";
    }

    console.log(affichage);
}