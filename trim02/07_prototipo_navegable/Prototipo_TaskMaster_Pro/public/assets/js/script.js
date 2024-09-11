// Función para agregar un miembro
function agregarMiembro(nombre, imagen) {
    const memberCardContainer = document.querySelector('.member-card-container');
    const memberCard = document.createElement('div');
    memberCard.className = 'col-md-6 member-card';
    memberCard.innerHTML = `
        <img src="${imagen}" alt="User Avatar">
        <p><input type="radio" name="user"> ${nombre}</p>
        <button class="btn-eliminar">Eliminar Usuario</button>
    `;

    // Agregar el nuevo miembro al contenedor
    memberCardContainer.appendChild(memberCard);

    // Mostrar una alerta
    alert(`${nombre} ha sido agregado como miembro.`);

    // Agregar evento para eliminar el miembro
    agregarEventoEliminar(memberCard, nombre);
}

// Función para agregar el evento de eliminación a una tarjeta de miembro
function agregarEventoEliminar(memberCard, nombre) {
    const btnEliminar = memberCard.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', () => {
        memberCard.remove(); // Eliminar el miembro del contenedor
        alert(`${nombre} ha sido eliminado como miembro.`);
    });
}

// Función para obtener una imagen aleatoria
function obtenerImagenAleatoria() {
    const imagenes = [
        '../../public/assets/img/User234.jpg',
        '../../public/assets/img/user53720.jpg',
        '../../public/assets/img/mariposa34.jpg',
        '../../public/assets/img/img1.jpg',
        '../../public/assets/img/messielmejor.jpg',
        '../../public/assets/img/sml16.jpg'
    ];
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio];
}

// Función para manejar los clics en "Agregar"
function setupAgregarMiembros() {
    const linksAgregar = document.querySelectorAll('.text-primary');

    linksAgregar.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const nombre = event.target.parentNode.textContent.trim();
            const imagen = obtenerImagenAleatoria(); // Selecciona una imagen aleatoria
            agregarMiembro(nombre, imagen);
        });
    });
}

// Función para buscar miembros
function buscarMiembros() {
    const searchInput = document.querySelector('input[placeholder="Buscar miembros"]');
    const memberCards = document.querySelectorAll('.member-card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        memberCards.forEach(card => {
            const memberName = card.querySelector('p').textContent.toLowerCase();
            if (memberName.includes(searchTerm)) {
                card.parentElement.style.display = '';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    });
}

// Función para inicializar la eliminación en los miembros ya existentes
function setupEliminarMiembrosExistentes() {
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        const nombre = card.querySelector('p').textContent.trim();
        agregarEventoEliminar(card, nombre);
    });
}

// Inicializar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    setupAgregarMiembros();
    buscarMiembros();
    setupEliminarMiembrosExistentes(); // Configurar eliminación para miembros existentes
});
