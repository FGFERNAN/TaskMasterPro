package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;


import co.com.AutomatizacionTaskMasterPro.models.DatosCrearUsuario;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionCrearUsuario;
import co.com.AutomatizacionTaskMasterPro.tasks.CrearUsuario;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class CrearUsuarioTaskMasterStepsDefinitions {
    @Cuando("^selecciona la opción de crear un nuevo usuario$")
    public void seleccionaLaOpciónDeCrearUnNuevoUsuario(List<DatosCrearUsuario> datos) {
        theActorInTheSpotlight().attemptsTo(CrearUsuario.aute(datos));
    }
    @Entonces("^el sistema debe mostrar un mensaje de usuario creado con exito y redirige a la interfaz de administrar-usuarios$")
    public void elSistemaDebeMostrarUnMensajeDeUsuarioCreadoConExitoYRedirigeALaInterfazDeAdministrarUsuarios() {
        theActorInTheSpotlight().should(seeThat(ValidacionCrearUsuario.ValidacionCrearUsuario()));
    }
}
