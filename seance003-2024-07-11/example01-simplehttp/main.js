const http = require('http');

//Create a web-server
const webServer = http.createServer( 
    //Call back function : http request (req) & http response (res)
    (req, res) => {
        console.log("request received ...")

        res.write('Hello world ...');
        res.end();
    }
)


const PORT = 3000 //Port number

//Listening to a port
webServer.listen( PORT, 'localhost', ()=>{
    console.log("Web server started and it's listening "+PORT+" port number")
} )

