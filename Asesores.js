function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Obtener el botón de volver arriba
const scrollToTopButton = document.getElementById('scrollToTop');

// Mostrar el botón cuando se hace scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex'; // Muestra el botón
    } else {
        scrollToTopButton.style.display = 'none'; // Oculta el botón
    }
});

// Función para desplazarse hacia arriba cuando se hace clic en el botón
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave hacia arriba
    });
});

