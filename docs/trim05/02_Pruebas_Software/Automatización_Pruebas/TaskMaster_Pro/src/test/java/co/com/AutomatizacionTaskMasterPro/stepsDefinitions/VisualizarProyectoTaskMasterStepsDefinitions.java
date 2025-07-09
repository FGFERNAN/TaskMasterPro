package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

<<<<<<< HEAD:docs/trim05/01_Pruebas_Software/Automatización_Pruebas/TaskMaster_Pro/src/test/java/co/com/AutomatizacionTaskMasterPro/stepsDefinitions/VisualizarProyectoTaskMasterStepsDefinitions.java
=======
import co.com.AutomatizacionTaskMasterPro.models.DatosVisualizarProyecto;
>>>>>>> main:docs/trim05/02_Pruebas_Software/Automatización_Pruebas/TaskMaster_Pro/src/test/java/co/com/AutomatizacionTaskMasterPro/stepsDefinitions/VisualizarProyectoTaskMasterStepsDefinitions.java
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionVisualizarProyecto;
import co.com.AutomatizacionTaskMasterPro.tasks.VisualizarProyecto;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class VisualizarProyectoTaskMasterStepsDefinitions {
    @Cuando("^seleccione un proyecto de la lista de proyectos en el menu$")
    public void seleccioneUnProyectoDeLaListaDeProyectosEnElMenu(List <DatosVisualizarProyecto> datos) {
        theActorInTheSpotlight().attemptsTo(VisualizarProyecto.ahora(datos));
    }

    @Entonces("^el sistema muestra todos los detalles del proyecto seleccionado$")
    public void elSistemaMuestraTodosLosDetallesDelProyectoSeleccionado() {
        theActorInTheSpotlight().should(seeThat(ValidacionVisualizarProyecto.validacionVisualizarProyecto()));
    }
}
