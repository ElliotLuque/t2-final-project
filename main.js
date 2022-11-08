const modal = document.getElementById("modal")

modal.addEventListener("click", () => {
    modal.style.display = "none"
})

const images = document.querySelectorAll(".masonry div img")

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex"

        const container = document.querySelector(".modal__content")
        container.innerHTML = `<img src="${image.src}" />`
        container.style.display = "flex"
    })
})
