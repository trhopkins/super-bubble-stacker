import "./style.css"
import printMe from "./print"

const comp = () => {
    const btn = document.createElement("button")
    btn.innerHTML = "Click me and check the console!"
    btn.onclick = printMe
    return btn
}

document.body.appendChild(comp())

console.log("Hello world")
