// Función para mostrar u ocultar la información
function toggleInfo(block) {
    const extraInfo = block.querySelector('.extra-info');
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
    } else {
        extraInfo.style.display = "none";
    }
}

const scrollToTopButton = document.getElementById('scrollToTop');
// Mostrar el botón cuando se desplaza hacia abajo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Función para volver al inicio
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});

