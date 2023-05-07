import "./style.css"

const comp = () => {
    const e = document.createElement("div")
    e.innerHTML = "Hello world"
    e.classList.add("hello")
    return e
}

document.body.appendChild(comp())

console.log("Hello world")
