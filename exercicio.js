//fazer um menu de exercicio utilizando ex dados em aula//
//6 exerc dentro de funcoes , incluir nome ou algo de sua preferncia

//if (condition) {

//} else {

//}
//do {

//} while (condition);
//for (let index = 0; index < array.length; index++) {
//   const element = array[index];

//}
import promptSync from "prompt-sync";

import { exercicio1 } from "./moduloExercicio1.js";
import { exercicio2 } from "./moduloExercicio2.js";
import { exercicio3 } from "./moduloExercicio3.js";
import { exercicio4 } from "./moduloExercicio4.js";
import { exercicio5 } from "./moduloExercicio5.js";
import { exercicio6 } from "./moduloExercicio6.js";



let prompt = promptSync()


let resposta;


do {
    console.log("Bem vindo ao menu de exercicio !")
    resposta = prompt("Digite um numero de 1 a 6, para escolher um exercicio ou 'sair'")


    switch (resposta) {


        case "1":
    //chamar exerc1
    console.log("voce escolheu o exercicio 1")
    exercicio1()
            break;

        case "2":
    console.log("voce escolheu o exercicio 2")
    exercicio2()
            break;

        case "3":
    console.log("voce escolheu o exercicio 3")
    exercicio3()
            break;

        case "4":
    console.log("voce escolheu o exercicio 4")
    exercicio4()
            break;

        case "5":
    console.log("voce escolheu o exercicio 5")
    exercicio5()
            break;

        case "6":
    console.log("voce escolheu o exercicio 6")
    exercicio6()
            break;

            default:
                console.log("Voce nao escolheu nenhum numero de exercicio")

    }

} while (resposta != "sair");

