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
        console.log(`Note d'algorithmique ajoutée: ${laNoteAlgo}`)
    }
    ajouterNoteJavaScript(laNote) {
        this.notes.JavaScript.push(laNote)
        console.log(`Note JavaScript ajoutée: ${laNote}`)
    }
    ajouterNote(matiere, tableau) {
        this.notes[matiere] = tableau
        console.log(`Notes de ${matiere} ajoutées: ${tableau}`)
    }
}