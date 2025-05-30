package co.com.AutomatizacionTaskMasterPro.models;

public class DatosCrearUsuario {
    private String nombre;
    private String apellidos;
    private String email;
    private String phone;
    private String id;
    private String contrasena;


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public DatosCrearUsuario(String nombre, String apellidos, String email, String phone, String id, String contrasena) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.phone = phone;
        this.id = id;
        this.contrasena = contrasena;
    }
}
