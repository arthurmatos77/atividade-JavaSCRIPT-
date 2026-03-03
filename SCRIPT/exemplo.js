



const rodape = document.getElementById("rodape")
//rodape.style.color = "red"

const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "um novo titulo"

rodape.appendChild(novoTitulo)

//getElementByID = pxa um elemento do HTML
const header = document.getElementById("exemplo")
header.appendChild(novoTitulo)

header.addEventListener("click", ()=> {
    alert("bat")
})