package co.com.AutomatizacionTaskMasterPro.models;

public class DatosEditarProyecto {
    private String nombre;
    private String descripcion;
    private String estado;
    private String prioridad;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getPrioridad() {
        return prioridad;
    }

    public void setPrioridad(String prioridad) {
        this.prioridad = prioridad;
    }

    public DatosEditarProyecto(String nombre, String descripcion, String estado, String prioridad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = estado;
        this.prioridad = prioridad;
    }
}
