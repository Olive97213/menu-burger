const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

burger.onclick = function () {
    burger.classList.toggle("active");
}


burger.addEventListener("click", () => {
    
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});
