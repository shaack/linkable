document.addEventListener("DOMContentLoaded", () => {
    const linkables = document.getElementsByClassName("linkable")
    for (const linkable of linkables) {
        linkable.style.cursor = "pointer"
        linkable.addEventListener("click", (event) => {
            location.href = linkable.getAttribute("data-href")
        })
    }
})
