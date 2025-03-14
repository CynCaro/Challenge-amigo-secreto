
// Array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista visual en la página
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

