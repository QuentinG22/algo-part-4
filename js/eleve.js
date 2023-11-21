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
    ajouterNoteAlgorithmique(laNoteAlgo) {
        this.notes.algorithmique.push(laNoteAlgo)
    }
    ajouterNoteJavaScript(laNoteJavaScript) {
        this.notes.JavaScript.push(laNoteJavaScript)
    }
    ajouterMatiere(matiere) {
        this.notes[matiere] = []
        console.log(`La matière ${matiere} à été ajouter`)
    }
    ajouterNote(matiere, laNote) {
        this.notes[matiere].push(laNote)
    }
}