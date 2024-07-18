const { PI , POSITIONS } = require("./consts");

//La classe Cercle
const Cercle = function( rayon, centre ){
    //Attributs : données
    this.rayon = rayon;
    this.centre = centre;

    //Méthodes : Comportement (Traitements)
    this.calculePerimetre = ()=>{
        return (2* PI * this.rayon);
    }

    this.calculeSurface = ()=>{
        return ( this.rayon**2 * PI  );
    }

    this.calculePerimetreSuperface = ()=>{
        return { 
            "p" : this.calculePerimetre(), 
            "s" : this.calculeSurface() 
        };
    }

    this.getPosition = ( point ) => {
        let distance = this.centre.distance( point )
    
        if (distance < this.rayon) {
            return POSITIONS.IN;
        }
    
        if (distance == this.rayon) {
            return POSITIONS.ON;
        }
    
        return POSITIONS.OUT;
    }
}

module.exports = Cercle;