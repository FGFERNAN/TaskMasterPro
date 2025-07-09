package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.models.DatosCrearTarea;
import co.com.AutomatizacionTaskMasterPro.questions.ValicacionCrearTarea;
import co.com.AutomatizacionTaskMasterPro.tasks.CrearTarea;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class CrearTareaTaskMasterStepsDefinitions {
    @Cuando("^selecciona la opción de crear una nueva tarea$")
    public void seleccionaLaOpciónDeCrearUnaNuevaTarea(List<DatosCrearTarea> datos) {
        theActorInTheSpotlight().attemptsTo(CrearTarea.aute(datos));

    }

    @Entonces("^el sistema debe mostrar un mensaje de confirmacion registrar correctamente la nueva tarea$")
    public void elSistemaDebeMostrarUnMensajeDeConfirmacionRegistrarCorrectamenteLaNuevaTarea() {
        theActorInTheSpotlight().should(seeThat(ValicacionCrearTarea.ValicacionCrearTarea()));
    }
}
