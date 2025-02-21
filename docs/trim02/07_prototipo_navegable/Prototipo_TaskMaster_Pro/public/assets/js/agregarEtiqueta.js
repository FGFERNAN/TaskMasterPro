const guardarEtiqueta = document.getElementById('guardar-etiqueta');
guardarEtiqueta.addEventListener('click', () => {
    const divEtiquetas = document.getElementById('etiquetas-creadas');
    let resultado = confirm('¿Desea agregar la etiqueta?');
    if(resultado){
        divEtiquetas.classList.remove('d-none');
    } else{
        
    }
});
