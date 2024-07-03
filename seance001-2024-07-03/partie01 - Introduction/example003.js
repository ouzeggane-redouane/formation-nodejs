
const func = function(){
    console.log("Hello world ...")
}

const x = setInterval( func, 1000 )

const func2 = function(){
    clearInterval(x)
}

setTimeout( func2, 10000 )