// Selecciona el botón y la descripción
const toggleButton = document.getElementById('toggleDescripcion');
const descripcion = document.getElementById('descripcion');

// Añade un evento al botón
toggleButton.addEventListener('click', () => {
    if (descripcion.style.display === 'none') {
        descripcion.style.display = 'block';
        toggleButton.textContent = 'Ocultar información';
    } else {
        descripcion.style.display = 'none';
        toggleButton.textContent = 'Mostrar información';
    }
});
