const EventEmitter = require('events').EventEmitter
const util =  require('util');

function Etudiant(nom, prenom, age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}

util.inherits(Etudiant, EventEmitter)

const e1 = new Etudiant("Larbi", "Zidane", 20);
const e2 = new Etudiant("Omar", "Said", 25);
const e3 = new Etudiant("Lamia", "Nour", 45);

const etudiants = [e1, e2, e3];

etudiants.forEach ( (e) => {
    e.on("parler", (text) => {
        console.log(e.nom+" "+e.prenom+" a dit : '"+text+"'");
    })
} )

// for (i=0; i<etudiants.length; i++){
//     const e = etudiants[i]
//     e.on("parler", (text) => {
//         console.log(e.nom+" "+e.prenom+" a dit : '"+text+"'");
//     })
// }
console.log("\n\n")
e1.emit("parler", "Bonjour, j'espère que vous avez bien compris ...");

console.log("\n\n")
e2.emit("parler", "Bonjour, Hi");

console.log("\n\n")
e3.emit("parler", "Bonjour, Hi");

// === différentes façons d'afficher un objet
/*
console.log("\n\n");
console.log(e1);
console.log("\n\n");

console.log( JSON.stringify(e1) );
console.log("\n\n");

console.log( JSON.stringify(e1, null, 2) );
console.log("\n\n");
*/