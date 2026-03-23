/**
 * Asesores.js - Lógica para la sección de Consejo Consultivo CIIG
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidad del Botón Scroll-to-Top
    const scrollBtn = document.getElementById('scrollToTop');

    const handleScroll = () => {
        // Mostrar botón cuando el usuario baja más de 400px
        if (window.scrollY > 400) {
            scrollBtn.style.display = "block";
            scrollBtn.style.opacity = "1";
        } else {
            scrollBtn.style.opacity = "0";
            // Pequeño delay para que la transición de opacidad se vea suave
            setTimeout(() => {
                if (window.scrollY <= 400) scrollBtn.style.display = "none";
            }, 300);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', handleScroll);
    scrollBtn.addEventListener('click', scrollToTop);

    // 2. Efecto de aparición suave para las tarjetas ejecutivas
    // Esto hace que los perfiles aparezcan con un leve desplazamiento hacia arriba
    const cards = document.querySelectorAll('.advisor-executive-card');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    // Configuración inicial para las tarjetas (invisibles antes del scroll)
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    
    // Ejecutar una vez al cargar por si el usuario ya está a mitad de página
    revealOnScroll();

    // 3. Log de depuración (Opcional - solo para desarrollo)
    console.log("Módulo de Asesores CIIG cargado correctamente.");
});