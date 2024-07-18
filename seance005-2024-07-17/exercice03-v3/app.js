const { getReponse } = require("./utils/maths.js")
const Cercle = require('./utils/cercle.js');
const Point = require('./utils/point.js');

const readline = require('readline-sync');

let rayon = readline.questionFloat("Donner le rayon du cercle : ");
console.log("Donner les coordonnée du centre du cercle : ");
let x0 = readline.questionFloat("\t x0 = ");
let y0 = readline.questionFloat("\t y0 = ");

let cercle = new Cercle( rayon, new Point(x0, y0) );

console.log("Donner les coordonnée du point n : ");
let x = readline.questionFloat("\t x = ");
let y = readline.questionFloat("\t y = ");

let n = new Point(x, y);

console.log ( "Périmètre : ", cercle.calculePerimetre() + " unités" );

console.log ( "Surface : ", cercle.calculeSurface() + " unités carrées" );

let reponse = getReponse ( cercle.getPosition( n ) )
console.log ( "La position de n par rapport au cercle : " +  reponse);