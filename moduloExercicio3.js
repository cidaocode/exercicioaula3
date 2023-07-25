import PromptSync from 'prompt-sync'

let prompt = PromptSync ()


export function exercicio3() {

    console.log("Funcao Exercicio 3 - FOR")


    let numeroInteiro = parseInt(prompt("Digite um numero inteiro "))
    if (numeroInteiro > 0) {
        console.log("O numero inserido é Positivo")
    } else if (numeroInteiro < 0) {
        console.log("O numero inserido é Negativo")

    } else {
        console.log()
    }


}