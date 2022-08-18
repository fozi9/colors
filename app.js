let color = "hotpink"

let painting = false 

const colors = [
    "white",
    "blue",
    "yellow",
    "red",
    "magenta",
    "purple",
    "black",
    "pink",
    "cyan",
]

function paint(e) {
    if (painting) {
        e.target.style.backgroundColor = color 
    }

    return false
}

function pickColor(e) {
    color = e.target.style.backgroundColor
}

function startPainting(e) {
    painting = true 
    paint(e)
}

function stopPainting() {
    painting = false
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container")

    const size = 40

    const containerSize = 500

    const boxSize = containerSize / size

    container.style.width = containerSize + "px"

    //drawing board

    for (let i = 0; i < size * size; i++) {
        const node = document.createElement("div")
        node.addEventListener("pointerdown", startPainting)
        node.addEventListener("pointerenter", paint)
        node.addEventListener("pointerup", stopPainting)
        node.style.width = boxSize + "px"
        node.style.height = boxSize + "px"
        container.appendChild(node)

    }

    //palette 
    const palette = document.getElementById("palette")

    for (let i = 0; i < colors.length; i++) {
        const node = document.createElement("div")
        node.addEventListener("pointerdown", pickColor)
        node.style.backgroundColor = colors[i]
        palette.appendChild(node)

    }
})