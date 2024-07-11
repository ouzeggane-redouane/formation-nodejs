const http = require('http');
const fs = require('fs');

const VIEWS = "./views/";

//create web-server
const webServer = http.createServer( async (req, res) => {
    //if request url is : /favicon.ico (for somme browsers)
    if (req.url === "/favicon.ico"){
        return;
    }

    //To indicate that a request is received ...
    console.log("request received ...")
    console.log("   URL : "+req.url)

    let fileName = '404';

    //Routing ....
    if (req.url === "/home" || req.url === '/'){
        fileName = 'home'
    }
    else if (req.url === '/products'){
        fileName = 'produit'
    }

    //Getting the full-path to the html file
    fileName = VIEWS+fileName+".html";
    console.log("   File : "+fileName)
    
    //Getting the full-path to the html file
    fs.readFile(fileName, (err, data)=>{
        //res.setHeader('Content-Type', 'text/html')

        res.write(data);
        res.end();
    })
} )

const PORT = 3000
//Listen to a port
webServer.listen( PORT, ()=>{
    console.log("Web server started and it's listening "+PORT+" port number")
} )

