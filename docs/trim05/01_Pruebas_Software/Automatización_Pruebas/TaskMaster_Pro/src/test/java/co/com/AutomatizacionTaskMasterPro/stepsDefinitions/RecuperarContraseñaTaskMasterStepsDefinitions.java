package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

public class RecuperarContraseñaTaskMasterStepsDefinitions {
    @Dado("^que el usuario se encuentra en la pagina de inicio de sesion$")
    public void queElUsuarioSeEncuentraEnLaPaginaDeInicioDeSesion() {
    }

    @Cuando("^seleccione la opcion de recuperar contraseña y ingrese su correo electronico y de click en el boton de recuperar contraseña$")
    public void seleccioneLaOpcionDeRecuperarContraseñaYIngreseSuCorreoElectronicoYDeClickEnElBotonDeRecuperarContraseña(DataTable arg1) {
    }

    @Entonces("^el sistema debe mostrar un mensaje de confirmacion y debe llegar un email de recuperación al correo ingresado$")
    public void elSistemaDebeMostrarUnMensajeDeConfirmacionYDebeLlegarUnEmailDeRecuperaciónAlCorreoIngresado() {
    }
}
