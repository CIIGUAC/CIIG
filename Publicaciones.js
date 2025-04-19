// Lógica para alternar bloques
let currentIndex = 0;

function nextBlock() {
    const blocks = document.querySelectorAll('.block');
    const totalBlocks = blocks.length;

    // Ocultar el bloque actual
    blocks[currentIndex].classList.remove('active');

    // Cambiar al siguiente índice (volvemos al primer bloque si alcanzamos el final)
    currentIndex = (currentIndex + 1) % totalBlocks;

    // Mostrar el nuevo bloque
    blocks[currentIndex].classList.add('active');
}