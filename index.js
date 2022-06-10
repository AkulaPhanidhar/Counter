let N = 0
let Y = 0

function Next1() {
    let hol = document.getElementById("number")
    N = N + 1
    hol.innerText = N
}

let lol = document.getElementById("btn1")
lol.onclick = Next1

function Next2() {
    let boy = document.getElementById("number")
    boy.style.color = "wheat"
    if (boy.innerText == "0") {
        alert("It's Already Zero")
    }
    boy.innerText = Y
    N = 0
}

let bol = document.getElementById("btn2")
bol.onclick = Next2

let full1 = () => {
    let bot = document.getElementById("number")
    bot.style.color = "red"
}
let c1 = document.getElementById("c1")
c1.onclick = full1

let full2 = () => {
    let bot = document.getElementById("number")
    bot.style.color = "blue"
}
let c2 = document.getElementById("c2")
c2.onclick = full2

let full3 = () => {
    let bot = document.getElementById("number")
    bot.style.color = "green"
}
let c3 = document.getElementById("c3")
c3.onclick = full3

let full4 = () => {
    let bot = document.getElementById("number")
    bot.style.color = "yellow"
}
let c4 = document.getElementById("c4")
c4.onclick = full4

let full5 = () => {
    let bot = document.getElementById("number")
    bot.style.color = "orange"
}
let c5= document.getElementById("c5")
c5.onclick = full5
