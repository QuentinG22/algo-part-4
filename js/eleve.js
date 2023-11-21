class Eleve {
    constructor(n, p, c) {
        this.nom = n
        this.prenom = p
        this.classe = c
        this.notes = {
            maths: [],
            algorithmique: [],
            JavaScript: []
        }
    }
    bonjour() {
        console.log(`Je suis ${this.prenom} ${this.nom} en classe ${this.classe}`)
    }
    // Pour ajouter une note à la matière Algorithmique
    ajouterNoteAlgorithmique(laNoteAlgo) {
        this.notes.algorithmique.push(laNoteAlgo)
    }
    // Pour ajouter une note à la matière JavaScript
    ajouterNoteJavaScript(laNoteJavaScript) {
        this.notes.JavaScript.push(laNoteJavaScript)
    }
    // Pour ajouter une note à une matière choisi grâce au paramètre
    ajouterNote(matiere, laNote) {
        this.notes[matiere].push(laNote)
    }
    // Ajouter une matière à this.notes
    ajouterMatiere(matiere) {
        this.notes[matiere] = []
        console.log(`La matière ${matiere} à été ajouter`)
    }
}