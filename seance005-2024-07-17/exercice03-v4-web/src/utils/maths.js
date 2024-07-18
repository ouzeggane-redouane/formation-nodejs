const { POSITIONS } = require("./consts");


function getReponse( position ) {
    if (position == POSITIONS.ON){
        return "Sur la bordure";
    }
    else if (position == POSITIONS.IN){
        return "À l'intérieure du cercle ...";
    }

    return "En dehors du cercle ..."
}

module.exports = { getReponse }