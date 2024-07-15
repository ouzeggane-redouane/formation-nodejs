const PI = require("./consts").PI;

const OUT   = 0;
const ON    = 1;
const IN    = 2;

function calculePerimetre(rayon=3){
    return (2* PI * rayon);
}

function calculeSurface(rayon=3){
    return ( rayon**2 * PI  );
}

function calculePerimetreSuperface(){
    return { 
        "p" : calculePerimetre(), 
        "s" : calculeSurface() 
    };
}

function getPosition( x0, y0, rayon , x, y ) {
    let distance = Math.sqrt( Math.pow(x-x0, 2) + Math.pow(y-y0, 2) ) ;

    if (distance < rayon) {
        return IN;
    }

    if (distance == rayon) {
        return ON;
    }

    return OUT;
}

function getReponse( position ) {
    if (position == ON){
        return "Sur la bordure";
    }
    else if (position == IN){
        return "À l'intérieure du cercle ...";
    }

    return "En dehors du cercle ..."
}

module.exports = {
    calculePerimetre,
    calculeSurface,
    calculePerimetreSuperface,
    getPosition, 
    getReponse
}