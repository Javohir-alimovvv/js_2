



const btnEl = document.querySelector(".btn");
const btn_2El = document.querySelector(".btn_2");
const menuEl = document.querySelector(".menu");
btnEl.addEventListener("click", () => {
    menuEl.style.display = "block";
    btnEl.style.display = "none";
    btn_2El.style.display = "block";
});
btn_2El.addEventListener("click", () => {
    menuEl.style.display = "none";
    btnEl.style.display = "block";
    btn_2El.style.display = "none";
});