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

// Llamada AJAX con jQuery para obtener información del perfil de GitHub
$(document).ready(function () {
    const username = 'jcestefania'; // Cambia esto por tu nombre de usuario en GitHub
    const url = `https://api.github.com/users/${username}`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            // Seleccionar el contenedor existente de GitHub
            const githubInfo = $('#sobre-mi .github-info');

            // Actualizar los datos dentro del contenedor existente
            githubInfo.html(`
                <h3>Perfil de GitHub</h3>
                <p>Nombre: ${data.name}</p>
                <p>Repositorios públicos: ${data.public_repos}</p>
                <p><a href="${data.html_url}" target="_blank">Ver perfil en GitHub</a></p>
            `);
        },
        error: function () {
            console.error('No se pudo obtener la información del perfil de GitHub.');
        }
    });
});
