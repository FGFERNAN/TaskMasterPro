class Project {
    constructor(id, nombre, descripcion, fechaInicio, fechaFin, estado, prioridad, etiquetasID) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.estado = estado;
        this.prioridad = prioridad;
        this.etiquetasID = etiquetasID;
    }
}

module.exports = Project;