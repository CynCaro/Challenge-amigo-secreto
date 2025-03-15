
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

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    
    // Usamos .map() para generar una lista de <li> y luego la unimos con .join("")
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}
