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
}