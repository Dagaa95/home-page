console.log("Cześć!");

let przycisk = document.querySelector(".przycisk");
let zdjecie = document.querySelector(".zdjecie");

przycisk.addEventListener("click", () => {
zdjecie.remove();
});