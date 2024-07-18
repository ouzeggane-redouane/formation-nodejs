//La classe Point
const Point = function(x, y){
    //Attributs
    this.x = x;
    this.y = y;

    //Méthodes : Comportement (Traitements)
    this.distance = (point) => {
        return Math.sqrt( 
            Math.pow(
                point.x- this.x , 2
            ) + 
            Math.pow(
                point.y- this.y, 2
            ) 
        ) ;
    }
}

module.exports = Point;