/**
 * Publicaciones.js - Lógica para el Feed Editorial del CIIG
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de "Revelación" al hacer scroll
    // Las tarjetas de publicaciones aparecerán suavemente conforme el usuario baja
    const postCards = document.querySelectorAll('.pub-card');
    
    const revealPosts = () => {
        const triggerBottom = window.innerHeight * 0.9;

        postCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('show-card');
            }
        });
    };

    // Configuración de estilos iniciales para la animación vía JS
    postCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
    });

    // Clase que activa la animación
    const style = document.createElement('style');
    style.innerHTML = `
        .show-card {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', revealPosts);
    revealPosts(); // Ejecutar una vez al inicio

    // 2. Manejo de descargas (Opcional: Feedback visual)
    const downloadButtons = document.querySelectorAll('.btn-download');
    
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const fileName = btn.innerText.replace('📄 ', '');
            console.log(`Iniciando descarga de: ${fileName}`);
            
            // Podrías añadir una pequeña alerta o mensaje de "Preparando archivo..."
        });
    });

    // 3. Botón Scroll to Top (Manteniendo la coherencia global)
    // Asegúrate de tener el botón con id="scrollToTop" en tu HTML
    const scrollBtn = document.getElementById('scrollToTop');

    if (scrollBtn) {
        window.onscroll = () => {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        };

        scrollBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});