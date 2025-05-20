package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import cucumber.api.DataTable;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class AutenticacionTaskMasterStepsDefinitions {
    @Dado("^que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro$")
    public void queElUsuarioSeEncuentraEnLaPaginaDeInicioDeSesionDeTaskMasterPro() {
        theActorInTheSpotlight().wasAbleTo(AbrirPagina.laPagina());
    }

    @Cuando("^ingrese las credenciales correctas \\(usuario y contraseña\\)$")
    public void ingreseLasCredencialesCorrectasUsuarioYContraseña(DataTable arg1) {
    }

    @Entonces("^se debe verificar que el usuario haya sido autenticado correctamente y redirigido a la interfaz principal del sistema$")
    public void seDebeVerificarQueElUsuarioHayaSidoAutenticadoCorrectamenteYRedirigidoALaInterfazPrincipalDelSistema() {
    }
}
