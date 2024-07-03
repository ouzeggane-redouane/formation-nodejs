//=============== Syntaxe standard
// function ajouter(x, y){
//     return x+y;
// }

//=============== expression de fonction : <constante> = <fonction_anonyme>
// const ajouter = function(x, y){
//         return x+y;
// }

//=============== fonction fléchée (avec =>)
// const ajouter = (x, y) => {
//     return x+y;
// }

// lambda expression
const ajouter = (x,y) => x+y

//==> L'appel à la fonction ajouter
console.log( ajouter(5, 15) ) ;