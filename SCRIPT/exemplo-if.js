const nota1 = Number(prompt("digite a primeira nota"))
const nota2 = Number(prompt("digite a segunda nota"))
const nota3 = Number(prompt("digite a terceira nota"))

const media = (nota1 + nota2 + nota3) / 3
console.log(media)

if (media < 3) {
    alert("horrivel")
} else if (media >= 3 && media < 7) {
    alert("da pra melhorar")
} else {
    alert("execelente")
}

// ele esta no f12 na aba console 