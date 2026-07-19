const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});