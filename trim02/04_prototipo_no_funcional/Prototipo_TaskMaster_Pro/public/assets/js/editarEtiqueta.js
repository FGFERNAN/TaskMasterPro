const editarEtiqueta = document.getElementById('editar-etiqueta');
editarEtiqueta.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.disabled = false;
    })
});