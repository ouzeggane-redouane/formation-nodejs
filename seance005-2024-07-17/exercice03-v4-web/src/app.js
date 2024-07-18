const { log } = require('console');

const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer( (req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', "text/html");

    const parseURL = url.parse(req.url, true);
    
    //Routage ...
    switch (parseURL.pathname){
        case '/':
        case '/form':{
            //Lire le contenu de ./src/views/page.htlm
            fs.readFile( './src/views/page.html', 'utf-8', (err, data)=>{
                res.write(data);
                res.end();
            } )

            break;
        }

        case '/calculer':{
            const query = parseURL.query;

            const x0 = parseFloat (query.x0);
            const y0 = parseFloat (query.y0);
            const rayon = parseFloat (query.rayon);

            const Cercle = require('./utils/cercle');
            const {getReponse} = require('./utils/maths.js');

            const cercle = new Cercle( x0, y0, rayon );

            let html = "Périmètre du cercle = "+cercle.calculePerimetre();
            html += "<br/>"
            html += "Surface du cerclce = "+cercle.calculeSurface();
            html += "<br/>"
            html += "<hr/>"
            html += "<a href='/form'>Revenir au formulaire</a>"

            res.write(html);
            res.end();
            break;
        }

        default:{
            res.statusCode = 404
            res.write("404 Error, page not found ....");
            res.end();
        }
    }
} )

const PORT = 5000;
server.listen( PORT, ()=>{
    log("=========================================================")
    log(`Web server started and it's listening on PORT = ${PORT}`);
    log("=========================================================")
} )