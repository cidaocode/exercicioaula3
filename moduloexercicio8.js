
let prompt = require('prompt-sync')()


let idade = parseFloat(prompt('Digite sua idade'))
while(idade <= 18) {
    idade = parseFloat(prompt('Digite sua idade'))
    console.log(idade )
    
}

