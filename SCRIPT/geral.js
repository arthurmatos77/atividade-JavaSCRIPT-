function exercicio2() {
    const valorHora = Number(prompt("digite o valor"))
}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })


function exercicio3() {
    const peso1 = Number(prompt("Digite o peso da pessoa 1: "))
    const peso2 = Number(prompt("Digite o peso da pessoa 2: "))
    const peso3 = Number(prompt("Digite o peso da pessoa 3: "))
    const peso4 = Number(prompt("Digite o peso da pessoa 4: "))
    const peso5 = Number(prompt("Digite o peso da pessoa 5: "))

    const resultado = ((peso1 + peso2 + peso3 + peso4 + peso5) / 5)
    alert(resultado)

}

const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click', () => { exercicio3() })

function exercicio4() {
    const temperatura = Number(prompt("digite a temperatura em celsius"))
    const resultado = ((9 * temperatura + 160) / 5)
    alert(resultado)
}
const buttonExercicio4 = document.getElementById("exercicio4")
buttonExercicio4.addEventListener('click', () => { exercicio4() })

function exercicio5() {
    const distância = Number(prompt("digite converta para quilômetros"))
    //Dica: 1 milha = 1.60934 km
    // processamento
    const resultado = (distância * 1.60934)
    //saida 
    alert(resultado)


}
const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => { exercicio5() })




function exercicio6() {
    // entrada

    const duração = Number(prompt("digite mostrar esse tempo em horas,minutos e segundos"))

    // processamento 
    const resultado = Number(prompt(" mostre esse tempo em horas, minutos e segudos"))


    // saída

    alert(resultado)



}
const buttonExercicio6 = document.getElementById("exercicio6")
buttonExercicio6.addEventListener('click', () => { exercicio6() })




function exercicio7() {
    // entrada
    const distância = Number(prompt("digite distância em quilômetros e converta para metros e centímetros."))


    // processamento

    const resultado = Number(prompt(" mostre esse tempo em horas, minutos e segudos"))
    // saida 

    alert(resultado)


}
const buttonExercicio7 = document.getElementById("exercicio7")
buttonExercicio7.addEventListener('click', () => { exercicio7() })




function exercicio8() {
    // entrada 
    const tabuada = Number(prompt("Qual tabuada vc deseja ver"))
    2
    // saída 
    // numero * 0
    // numero * 1
    // numero * 2
    // numero * 3
    // numero * 4 
    // numero * 5 
    // numero *6
    // numero *7
    // numero *8
    // numero *9
    // numero *10
}
const buttonExercicio8 = document.getElementById("exercicio8")
buttonExercicio8.addEventListener('click', () => { exercicio8() })




function exercicio9() {
    //entrada 
    const nota = Number(prompt("informe a primeira nota"))
    const nota2 = Number(prompt("informe a segunda nota"))
    const nota3 = Number(prompt("informe a terceira nota"))

    const media = ( nota + nota2 + nota3 )

    if (media >= 7 ) {
        alert("Aprovado")
    }
    else if (media >= 5) {
        alert("recuperaçao")
    }
    
    else if (media <= 5 ) {
        alert("reprovado") 
    }
}
const buttonExercicio9 = document.getElementById("exercicio9")
buttonExercicio9.addEventListener('click', () => { exercicio9() })