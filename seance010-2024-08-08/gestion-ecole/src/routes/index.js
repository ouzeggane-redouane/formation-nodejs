module.exports = (app) => {
    const authRouter = require("./auth.route");
    const utilisateurRouter = require("./utilisateur.route");
   
    //========================================================
    //Pages web directs....
    //========================================================

    app.get("/main", (req, res)=>{
        //res.render( "pages/main.ejs" );
        res.render("pages/main.ejs")
    })
    
    app.get("/", (req, res)=>{
        //res.render( "pages/main.ejs" );
        res.redirect("/login")
    })

    app.get("/login", (req, res)=>{
        const  {error, username, password} = req.query;
        res.render( "pages/login.ejs", {error, username, password} );
    })

    app.get("/register", (req, res)=>{
        res.render( "pages/register.ejs" );
    })

    //========================================================
    //Traitements ==> page web ...
    //========================================================
    app.use("/auth", authRouter);
    app.use("/utilisateur", utilisateurRouter);
}
