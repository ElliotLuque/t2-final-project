const modal = document.getElementById("modal")

modal.addEventListener("click", () => {
    const image = document.querySelector(".modal__content img")
    image.style.opacity = 0
    modal.style.display = "none"
})

const images = document.querySelectorAll(".masonry div img")

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex"
        modal.style.opacity = 1

        const container = document.querySelector(".modal__content")
        container.innerHTML = `<img src="${image.src}" />`
        container.style.display = "flex"
    })
})

const filterHeaderButtons = document.querySelectorAll(".filter__header > svg")

filterHeaderButtons.forEach((button, index) => {
    button.addEventListener("click", () => {

        button.style.rotate = "180deg" === button.style.rotate 
            ? "0deg" 
            : "180deg";

        const filter = button.parentElement.parentElement
        const filterBody = filter.children[1]

        index === 2 
            ? filterBody.style.display = "none" === filterBody.style.display ? "flex" : "none"
            : filterBody.style.display = "none" === filterBody.style.display ? "block" : "none"

    })
})