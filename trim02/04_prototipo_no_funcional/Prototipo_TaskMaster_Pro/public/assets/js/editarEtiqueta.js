const editarEtiqueta = document.getElementById('editar-etiqueta');
editarEtiqueta.addEventListener('click', () => {
    const divEditar = document.getElementById('divEditar');
    divEditar.classList.remove('d-none');
});

const guardar = document.getElementById('guardar-editar');
guardar.addEventListener('click', () =>{
    let resultado = confirm('¿Deseas guardar cambios?');
    if(resultado){
        const divEditar = document.getElementById('divEditar');
        divEditar.classList.add('d-none');
        alert('Cambios guardados exitosamente');
    } else{
        
    }
});