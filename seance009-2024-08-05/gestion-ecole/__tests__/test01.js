const Utilisateur = require('../models/utilisateur.model')

const user  = new Utilisateur(
    null, 
    "ADEL", 
    "Redouane", 
    "2000-06-01", 
    "rouzeggane@gmail.com",
    "admin",
    "admin---"
)

user.save();