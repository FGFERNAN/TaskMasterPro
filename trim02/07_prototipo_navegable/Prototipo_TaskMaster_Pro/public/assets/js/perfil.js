function confirmarCancelacion() {
    if (confirm("¿Está seguro de que desea cancelar la cuenta?")) {
        // Aquí puedes agregar la lógica para cancelar la cuenta
        alert("Cuenta cancelada");
        window.location.href = '/public/index.html';
    } else {
        // Lógica si el usuario cancela
        alert("Operación cancelada");
        
    }
}