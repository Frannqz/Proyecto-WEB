const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
const dropdowns = document.querySelectorAll(".dropdown-toggle");
const toggleMenu = document.getElementById("toggle-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const logos = document.querySelectorAll(".logo");
const mobileDropdownsToggle = document.querySelectorAll(".mobile-nav .dropdown-toggle");

dropdowns.forEach((dropdown) =>
    dropdown.addEventListener("click", (e) => e.preventDefault())
);

mobileDropdownsToggle.forEach((dropdown) =>
    dropdown.addEventListener("click", toggleOpen)
);

function toggleOpen() {
    mobileDropdownsToggle.forEach((dropdown, index) => {
        if (this === mobileDropdownsToggle[index]) {
            dropdown.classList.toggle("active");
        } else {
            dropdown.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", (e) => {
    const headerHeight = header.clientHeight;

    if (window.scrollY > headerHeight) {
        header.classList.add("show-bg");
    } else {
        header.classList.remove("show-bg");
    }
});

logos.forEach((logo) => {
    logo.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

toggleMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileMenu.classList.toggle("open");
});


//Obtener año actual FOOTER
var currentYear = new Date().getFullYear();
// Mostrar el año en el elemento HTML
var yearElement = document.getElementById("year");
yearElement.textContent = currentYear;



// Función para mostrar u ocultar el logo según el tamaño de la pantalla
function toggleLogo() {
    var logo = document.getElementById('logo');
    var mobileLogo = document.getElementById('mobile-logo');

    if (window.innerWidth <= 768) { // Cambiar el ancho
        logo.style.display = 'none';
        mobileLogo.style.display = 'block';
    } else {
        logo.style.display = 'block';
        mobileLogo.style.display = 'none';
    }
}
// Llamar a la función al cargar la página y al cambiar el tamaño de la ventana
window.onload = toggleLogo;
window.addEventListener('resize', toggleLogo);
