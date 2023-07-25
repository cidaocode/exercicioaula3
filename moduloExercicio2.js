import PromptSync from 'prompt-sync'

let prompt = PromptSync ()

export function exercicio2() {

    console.log("Funcao Exercicio 2 - FOR")

    

let salario = parseFloat(prompt("Digite o Salario:"))
if(salario < 500) {
    //caucula o acrescimo
    salario = salario * 1.3
    console.log("O novo Salario é de: R$ " + salario.toFixed(2))
} else {
    //Exibe mensagem
}

}