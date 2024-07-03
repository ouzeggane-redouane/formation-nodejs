//Solution de l'équation ax + b = 0 (avec les entrées)
const readline = require('readline-sync')


//Initialisation des variables a et b
a = readline.question('Donner la valeur de A : ')
b = readline.question('Donner la valeur de B : ')

//le caclul de x
x = -b/a

//affichge de x
console.log(x)

//affichage avec message(simple quot)
console.log('La solution de l\'équation est X = ', x)

//affichage avec message (concatenation)
console.log('La solution de l\'équation '+a+'x + '+b+' = 0 est X = '+x)

//affichage avec back-quots
console.log(`La solution de l'équation ${a}x + ${b} = 0 est X = ${x}`)