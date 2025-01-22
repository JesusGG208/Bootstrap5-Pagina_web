let nav = document.getElementById("nav");
let spinner = document.getElementById("spinner");
let sol = document.getElementById("btnModoClaro");
let luna = document.getElementById("btnModoOscuro")
nav.style.visibility = 'hidden';
setTimeout(() => {
    spinner.remove();
    nav.style.visibility = 'visible';
}, 2000);
sol.addEventListener("click", () => {
    document.body.setAttribute("data-bs-theme", "dark");
    sol.style.display = "none";
    luna.style.display = "inline";
});
luna.addEventListener("click", () => {
    document.body.removeAttribute("data-bs-theme");
    luna.style.display = "none";
    sol.style.display = "inline";
});