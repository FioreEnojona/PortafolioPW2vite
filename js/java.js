const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav.menu');

// Evento para abrir/cerrar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Validación del campo "nombre"
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre === "") {
            alert("Nombre no puede estar vacío.");
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert("Nombre solo puede tener letras y espacios.");
            return;
        }

        // Validación del campo "email"
        const email = document.getElementById("email").value.trim();
        if (email === "") {
            alert("Correo electrónico no puede estar vacío.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Correo electrónico no es válido.");
            return;
        }

        // Validación del campo "asunto"
        const asunto = document.getElementById("asunto").value.trim();
        if (asunto === "") {
            alert("Asunto no puede estar vacío.");
            return;
        }

        // Validación del campo "mensaje"
        const mensaje = document.getElementById("mensaje").value.trim();
        if (mensaje === "") {
            alert("Mensaje no puede estar vacío.");
            return;
        }
        if (mensaje.length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            return;
        }

        alert("Formulario enviado correctamente.");
        document.getElementById("form").reset();
    });
});
