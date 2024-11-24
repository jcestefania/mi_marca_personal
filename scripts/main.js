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
    const username = 'jcestefania';
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

// Escucha el evento de envío del formulario
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recargar la página al enviar el formulario
  
    const serviceID = 'service_y21rwxb';
    const templateID = 'template_5ftku8q';
  
    // Usa emailjs para enviar el formulario
    emailjs.sendForm(serviceID, templateID, this)
      .then((response) => {
        alert('Mensaje enviado correctamente. ¡Gracias por contactarme!');
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        alert('Error al enviar el mensaje. Intenta nuevamente.');
        console.error('FAILED...', error);
      });
  });