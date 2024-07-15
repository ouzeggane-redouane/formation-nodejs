const PI = require("./consts").PI;

//Constantes & Types de données
const OUT   = 0;
const ON    = 1;
const IN    = 2;

const Point = function(x, y){
    this.x = x;
    this.y = y;
}

const Cercle = function( rayon, centre ){
    this.rayon = rayon;
    this.centre = centre;
}


//Traitements : fonctions

function calculePerimetre(cercle){
    return (2* PI * cercle.rayon);
}

function calculeSurface(cercle){
    return ( cercle.rayon**2 * PI  );
}

function calculePerimetreSuperface(cercle){
    return { 
        "p" : calculePerimetre(cercle), 
        "s" : calculeSurface(cercle) 
    };
}

function getPosition( cercle , point ) {
    let distance = Math.sqrt( 
        Math.pow(
            point.x- cercle.centre.x , 2
        ) + 
        Math.pow(
            point.y- cercle.centre.y, 2
        ) 
    ) ;

    if (distance < cercle.rayon) {
        return IN;
    }

    if (distance == cercle.rayon) {
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
    Cercle, Point, //Données 

    //Traitements
    calculePerimetre,
    calculeSurface,
    calculePerimetreSuperface,
    getPosition, 
    getReponse
}