const buttonNavbar = document.getElementById("navbar-button");
const menu = document.getElementById("menu-nav");
const salirNavbar = document.getElementById("salir");
const fondo = document.getElementById("oscuro-nav")

buttonNavbar.addEventListener("click", function(){
    menu.style.right = "-5%"
    menu.classList.add("mostrar")
    menu.classList.remove("ocultar")
    fondo.classList.add("fondo_apa")
    fondo.classList.remove("fondo_des")
    fondo.style.display = "block"
})

salirNavbar.addEventListener("click", function(){
    menu.style.right = "-100%"
    menu.classList.add("ocultar")
    menu.classList.remove("mostrar");
    fondo.classList.add("fondo_des")
    fondo.classList.remove("fondo_apa")
    fondo.style.display = "none"
})

function reveal() {
    const reveals = document.querySelectorAll('.animacion');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 5; // Ajusta este valor para controlar cuándo se revela

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', reveal);



const navUl = document.getElementById("nav-ul")
const x = document.getElementById("x")

bars.addEventListener("click", function(){
    navUl.style.transform = "translateX(0%)"
    navUl.classList.add("mostrar")
    navUl.classList.remove("ocultar");

})

x.addEventListener("click", function(){
    navUl.style.transform = "translateX(100%)"
    navUl.classList.add("ocultar")
    navUl.classList.remove("mostrar");
})