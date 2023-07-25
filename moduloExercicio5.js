

import PromptSync from 'prompt-sync'

let prompt = PromptSync()


export function exercicio5() {

    console.log("Funcao Exercicio 5 - FOR")

    let anterior = 0
    let atual = 1
    let novo = anterior + atual

    console.log(anterior)
    console.log(atual)

    for (let contador = 3; contador <= 10; contador++) {
        novo = anterior + atual
        anterior = atual
        atual = novo
        console.log(novo)
    }
}