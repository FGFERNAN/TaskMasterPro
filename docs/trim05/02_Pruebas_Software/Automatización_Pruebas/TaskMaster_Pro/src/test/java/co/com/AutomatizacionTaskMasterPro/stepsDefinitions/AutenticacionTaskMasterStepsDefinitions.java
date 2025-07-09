package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.models.CredencialesInicioSesion;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionLogin;
import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import co.com.AutomatizacionTaskMasterPro.tasks.Autenticarse;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class AutenticacionTaskMasterStepsDefinitions {
    @Dado("^que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro$")
    public void queElUsuarioSeEncuentraEnLaPaginaDeInicioDeSesionDeTaskMasterPro() {
        theActorInTheSpotlight().wasAbleTo(AbrirPagina.laPagina());
    }

    @Cuando("^ingrese las credenciales correctas \\(usuario y contraseña\\)$")
    public void ingreseLasCredencialesCorrectasUsuarioYContraseña(List<CredencialesInicioSesion> credenciales) {
        theActorInTheSpotlight().attemptsTo(Autenticarse.aute(credenciales));
    }

    @Entonces("^se debe verificar que el usuario haya sido autenticado correctamente y redirigido a la interfaz principal del sistema$")
    public void seDebeVerificarQueElUsuarioHayaSidoAutenticadoCorrectamenteYRedirigidoALaInterfazPrincipalDelSistema() {
        theActorInTheSpotlight().should(seeThat(ValidacionLogin.validacionLogin()));
    }
}
