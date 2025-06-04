package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.models.DatosRecuperarContraseña;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionRecuperarContraseña;
import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import co.com.AutomatizacionTaskMasterPro.tasks.RecuperarContraseña;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class RecuperarContraseñaTaskMasterStepsDefinitions {
    @Dado("^que el usuario se encuentra en la pagina de inicio de sesion$")
    public void queElUsuarioSeEncuentraEnLaPaginaDeInicioDeSesion() {
        theActorInTheSpotlight().wasAbleTo(AbrirPagina.laPagina());
    }

    @Cuando("^selecciona la opcion de recuperar contraseña$")
    public void seleccionaLaOpcionDeRecuperarContraseña(List <DatosRecuperarContraseña> datos) {
        theActorInTheSpotlight().attemptsTo(RecuperarContraseña.aute(datos));
    }

    @Entonces("^el sistema debe mostrar un mensaje de confirmacion y debe llegar un email de recuperación al correo ingresado$")
    public void elSistemaDebeMostrarUnMensajeDeConfirmacionYDebeLlegarUnEmailDeRecuperaciónAlCorreoIngresado() {
        theActorInTheSpotlight().should(seeThat(ValidacionRecuperarContraseña.ValidacionRecuperarContraseña()));

    }
}
