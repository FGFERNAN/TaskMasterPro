package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.questions.ValidacionVisualizarProyecto;
import co.com.AutomatizacionTaskMasterPro.tasks.VisualizarProyecto;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class VisualizarProyectoTaskMasterStepsDefinitions {
    @Cuando("^seleccione un proyecto de la lista de proyectos en el menu$")
    public void seleccioneUnProyectoDeLaListaDeProyectosEnElMenu() {
        theActorInTheSpotlight().attemptsTo(VisualizarProyecto.ahora());
    }

    @Entonces("^el sistema muestra todos los detalles del proyecto seleccionado$")
    public void elSistemaMuestraTodosLosDetallesDelProyectoSeleccionado() {
        theActorInTheSpotlight().should(seeThat(ValidacionVisualizarProyecto.validacionVisualizarProyecto()));
    }
}
