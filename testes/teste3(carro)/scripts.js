let prevButtom = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

prevButtom.onclick= () => {
    console.log("Botão next")
}

prevButtom.onclick = () => {
    console.log("Botão prev")
}