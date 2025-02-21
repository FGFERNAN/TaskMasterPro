const eliminarProyectos = document.querySelectorAll('#buton-eliminar'); // Selecciona todos los botones de eliminar con la clase 'boton-eliminar'
const proyectos = document.querySelectorAll('#sub-menu-proyectos'); // Selecciona todos los proyectos (sub-menús) que se pueden eliminar

eliminarProyectos.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        let resultado = confirm("¿Estás seguro que deseas eliminar el proyecto?");
        if (resultado) {
            proyectos[index].remove(); // Elimina el submenú correspondiente al índice del botón
            alert(`El proyecto ha sido eliminado`);
        }
    });
});
