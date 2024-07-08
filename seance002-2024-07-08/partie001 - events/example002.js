const events = require('events')

const declEvts = new events.EventEmitter();

const CONSTS = {
    ENTER : "ENTER",
    EXIT : "EXIT"
}

declEvts.on( CONSTS.ENTER , (msg)=>{
    console.log(`${CONSTS.ENTER} Event : ${msg}`)
} );

declEvts.on( CONSTS.EXIT , (msg)=>{
    console.log(`${CONSTS.EXIT} Event : ${msg}`)
} );

declEvts.emit(CONST.ENTER, "Hello, how are you ?");
declEvts.emit(CONST.EXIT, "Bye ...");

