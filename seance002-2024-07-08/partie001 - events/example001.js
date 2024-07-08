const events = require('events')

const declEvts = new events.EventEmitter();

declEvts.on( "ENTER" , (msg)=>{
    console.log(`ENTER Event : ${msg}`)
} );

declEvts.emit("ENTER", "Hello, how are you ?");

declEvts.emit("ENTER", "Bonjour, comment ça va ?");

