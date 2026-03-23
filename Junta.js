// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // Botón scroll-to-top (Igual que Inicio)
    const scrollBtn = document.getElementById('scrollToTop');

    window.onscroll = function() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    scrollBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

});