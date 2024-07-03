//Callback functions - Modèle non-bloquant de javascirpt
console.log("Start ....")

const x = setInterval( ()=>{
    console.log("Hello world ...")
}, 1000 )

console.log("Medium ....")

setTimeout( ()=>{
    clearInterval(x)
}, 10000 )

console.log("Finish ....")
