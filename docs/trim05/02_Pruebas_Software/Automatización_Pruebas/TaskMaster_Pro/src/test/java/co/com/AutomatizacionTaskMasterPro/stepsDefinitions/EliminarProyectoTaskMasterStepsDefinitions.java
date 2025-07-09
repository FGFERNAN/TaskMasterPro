package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.questions.ValidacionEliminarProyecto;
import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import co.com.AutomatizacionTaskMasterPro.tasks.CrearUsuario;
import co.com.AutomatizacionTaskMasterPro.tasks.EliminarProyecto;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class EliminarProyectoTaskMasterStepsDefinitions {
    @Cuando("^seleccione la opción de eliminar un proyecto$")
    public void seleccioneLaOpciónDeEliminarUnProyecto() {
        theActorInTheSpotlight().attemptsTo(EliminarProyecto.ahora());
    }
    @Entonces("^el sistema muestra un mensaje de proyecto eliminado exitosamente y actualiza la lista de proyectos eliminando su registro$")
    public void elSistemaMuestraUnMensajeDeProyectoEliminadoExitosamenteYActualizaLaListaDeProyectosEliminandoSuRegistro() {
        theActorInTheSpotlight().should(seeThat(ValidacionEliminarProyecto.ValidacionEliminarProyecto()));

    }
}
