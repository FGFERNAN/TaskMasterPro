const eliminarEtiqueta = document.getElementById('eliminar-etiqueta');
const etiquetasCreadas = document.getElementById('etiquetas-creadas');
const divEditar = document.getElementById('divEditar');
eliminarEtiqueta.addEventListener('click', () => {
    let resultado = confirm("¿Estas seguro que deseas eliminar la etiqueta?");
    if (resultado) {
        divEditar.remove(),
        etiquetasCreadas.remove();
        alert(`La etiqueta ha sido eliminado`);
    } else {

    }
});