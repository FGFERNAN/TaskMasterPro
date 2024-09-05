function confirmarCancelacion() {
    if (confirm("¿Está seguro de que desea cancelar la cuenta?")) {
        // Aquí puedes agregar la lógica para cancelar la cuenta
        alert("Cuenta cancelada");
    } else {
        // Lógica si el usuario cancela
        alert("Operación cancelada");
    }
}