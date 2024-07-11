const http = require('http');
const fs = require('fs');

const webServer = http.createServer( (req, res) => {
    console.log("request received ...")

    let fileName = 'home.html';

    fs.readFile(fileName, (err, data)=>{
        res.setHeader('Content-Type', 'text/html')

        res.write(data);
        res.end();
    })

    
} )

const PORT = 3000
webServer.listen( PORT, 'localhost', ()=>{
    console.log("Web server started and it's listening "+PORT+" port number")
} )

