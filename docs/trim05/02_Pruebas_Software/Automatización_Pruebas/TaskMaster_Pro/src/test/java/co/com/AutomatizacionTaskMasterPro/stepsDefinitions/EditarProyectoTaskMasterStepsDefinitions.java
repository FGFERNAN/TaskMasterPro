package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;


import co.com.AutomatizacionTaskMasterPro.models.DatosEditarProyecto;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionEditarProyecto;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionLogin;
import co.com.AutomatizacionTaskMasterPro.tasks.EditarProyecto;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class EditarProyectoTaskMasterStepsDefinitions {
    @Cuando("^selecciona la opción de editar un proyecto$")
    public void seleccionaLaOpciónDeEditarUnProyecto(List<DatosEditarProyecto> datos) {
        theActorInTheSpotlight().attemptsTo(EditarProyecto.aute(datos));
    }

    @Entonces("^el sistema debe mostrar una alerta confirmando los cambios con exito y se deben ver reflejados al abrir los detalles$")
    public void elSistemaDebeMostrarUnaAlertaConfirmandoLosCambiosConExitoYSeDebenVerReflejadosAlAbrirLosDetalles() {
        theActorInTheSpotlight().should(seeThat(ValidacionEditarProyecto.ValidacionEditarProyecto()));
    }
}
