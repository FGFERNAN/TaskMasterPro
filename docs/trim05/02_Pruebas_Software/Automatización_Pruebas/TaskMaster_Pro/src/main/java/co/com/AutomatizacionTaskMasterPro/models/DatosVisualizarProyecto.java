package co.com.AutomatizacionTaskMasterPro.models;

public class DatosVisualizarProyecto {
    private String nombre;
    private String etiqueta;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEtiqueta() {
        return etiqueta;
    }

    public void setEtiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
    }

    public DatosVisualizarProyecto(String nombre, String etiqueta) {
        this.nombre = nombre;
        this.etiqueta = etiqueta;
    }
}
