const eliminarProyecto = document.getElementById('buton-eliminar');
const proyecto = document.getElementById('sub-menu-proyectos');
eliminarProyecto.addEventListener('click', () => {
    let resultado = confirm("¿Estas seguro que deseas eliminar el proyecto?");
    if(resultado){
        proyecto.remove();
        alert(`El proyecto ha sido eliminado`);
    } else{

    }
});