
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
        const panel = accordion.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});


const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav-menu_visible");

if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
} else {
    navToggle.setAttribute("aria-label", "Abrir menú");
}
});

var porcentajeAdolescentesViolenciaDigital = 30;
var porcentajePadresPreocupados = 60;
var porcentajeAdolescentesNoInforma = 20;

var lista = document.createElement("ul");

var item1 = document.createElement("li");
item1.textContent = `El ${porcentajeAdolescentesViolenciaDigital}% de los adolescentes ha experimentado algún tipo de violencia digital.`;
lista.appendChild(item1);

var item2 = document.createElement("li");
item2.textContent = `El ${porcentajePadresPreocupados}% de los padres está preocupado por la seguridad en línea de sus hijos.`;
lista.appendChild(item2);

var item3 = document.createElement("li");
item3.textContent = `El ${porcentajeAdolescentesNoInforma}% de los adolescentes no informa a sus padres sobre incidentes de violencia digital por temor a represalias.`;
lista.appendChild(item3);

document.getElementById("Estadisticas").appendChild(lista);



ddocument.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const carouselContainer = document.getElementById('carouselContainer');
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener('click', function () {
        // Toggle clase para el carrusel
        carouselContainer.classList.toggle('hide-carousel');
    });

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");

        if (navMenu.classList.contains("nav-menu_visible")) {
            navToggle.setAttribute("aria-label", "Cerrar menú");
            // Ocultar el carrusel cuando se abre el menú
            carouselContainer.classList.add('hide-carousel');
        } else {
            navToggle.setAttribute("aria-label", "Abrir menú");
            // Mostrar el carrusel cuando se cierra el menú
            carouselContainer.classList.remove('hide-carousel');
        }
    });
});
