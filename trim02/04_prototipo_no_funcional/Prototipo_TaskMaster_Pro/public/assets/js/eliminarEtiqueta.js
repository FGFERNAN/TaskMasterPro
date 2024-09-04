const eliminarEtiqueta = document.getElementById('eliminar-etiqueta');
const etiquetasCreadas = document.getElementById('etiquetas-creadas');
eliminarEtiqueta.addEventListener('click', () => {
    let resultado = confirm("¿Estas seguro que deseas eliminar la etiqueta?");
    if (resultado) {
        etiquetasCreadas.remove();
        alert(`La etiqueta ha sido eliminado`);
    } else {

    }
});