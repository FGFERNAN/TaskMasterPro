const tipoCampo = document.getElementById('tipo-campo');
const valorCampo = document.getElementById('valor-campo');

tipoCampo.addEventListener('change', () => {
    const seleccion = tipoCampo.value;
    valorCampo.type = seleccion;
});