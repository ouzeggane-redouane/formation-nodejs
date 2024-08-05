module.exports = (app) => {
    const authRouter = require("./auth.route");
    const utilisateurRouter = require("./utilisateur.route");
    
    app.get("/", (req, res)=>{
        //res.render( "pages/main.ejs" );
        res.redirect("/login")
    })

    app.get("/login", (req, res)=>{
        res.render( "pages/login.ejs", {error:req.query.error} );
    })

    app.get("/register", (req, res)=>{
        res.render( "pages/register.ejs" );
    })

    app.use("/auth", authRouter);

    app.use("/utilisateur", utilisateurRouter);
}
