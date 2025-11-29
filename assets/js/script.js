// Obtener referencias a formulario e inputs
const formulario = document.querySelector("#form-reserva");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const alertContainer = document.querySelector("#alert-container");

// Listener submit
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita recargar la página

    // Validación simple
    if (inputNombre.value.trim() === "" || inputEmail.value.trim() === "") {

        mostrarAlerta("⚠ Debes completar todos los campos antes de enviar.", "danger");

    } else {

        mostrarAlerta("✔ ¡Solicitud enviada con éxito! Gracias por contactarnos.", "success");
        formulario.reset(); 
    }
});

// Función para crear alerta Bootstrap
function mostrarAlerta(mensaje, tipo) {
    alertContainer.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}
