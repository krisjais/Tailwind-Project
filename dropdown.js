const menubtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menubtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
} );
