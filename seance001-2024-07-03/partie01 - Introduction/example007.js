function factoriel(n) {
    //Issue de secours : condition pour arrêter les appels recusifs
    if (n==1 || n==0){
        return 1;
    }

    //Appel récursif ... 
    return factoriel(n-1) * n;
}

console.log("\n\n")
console.log( factoriel(6) );
console.log("\n\n")