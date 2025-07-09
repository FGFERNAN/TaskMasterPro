class Task {
    constructor(id, nombre, descripcion, fechaInicio, fechaFin, estado, prioridad, usuarioID, proyectoID, nombreProyecto) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.estado = estado;
        this.prioridad = prioridad;
        this.usuarioID = usuarioID;
        this.proyectoID = proyectoID;
        this.nombreProyecto = nombreProyecto;
    }
}

module.exports = Task;