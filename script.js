document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board'); // Obtiene el elemento del tablero
    const resetButton = document.getElementById('resetButton'); // Obtiene el botón de reinicio

    // Crear celdas del tablero con números del 1 al 100
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div'); // Crea un elemento de celda
        cell.classList.add('cell'); // Agrega la clase "cell" a la celda
        cell.dataset.number = i; // Establece el número de la celda como un atributo de datos
        cell.textContent = i; // Establece el texto de la celda como el número
        cell.addEventListener('click', () => markCell(cell)); // Agrega un event listener para marcar la celda cuando se hace clic
        board.appendChild(cell); // Agrega la celda al tablero
    }

    resetButton.addEventListener('click', () => resetCells()); // Agrega un event listener para reiniciar las celdas cuando se hace clic en el botón de reinicio

    // Función para marcar una celda
    function markCell(cell) {
        cell.classList.toggle('marked'); // Alternar la clase "marked" en la celda para mostrar u ocultar la X
    }

    // Función para reiniciar todas las celdas
    function resetCells() {
        const cells = document.querySelectorAll('.cell'); // Selecciona todas las celdas
        cells.forEach(cell => cell.classList.remove('marked')); // Remueve la clase "marked" de todas las celdas
    }
});
