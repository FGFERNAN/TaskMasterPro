package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import co.com.AutomatizacionTaskMasterPro.tasks.CrearUsuario;
import co.com.AutomatizacionTaskMasterPro.tasks.EliminarProyecto;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class EliminarProyectoTaskMasterStepsDefinitions {
    @Cuando("^seleccione un proyecto de la lista y hace click en el boton de eliminar y confirma la eliminacion del proyecto$")
    public void seleccioneUnProyectoDeLaListaYHaceClickEnElBotonDeEliminarYConfirmaLaEliminacionDelProyecto() {
        theActorInTheSpotlight().attemptsTo(EliminarProyecto.ahora());
    }

    @Entonces("^el sistema muestra un mensaje de proyecto eliminado exitosamente y actualiza la lista de proyectos eliminando su registro$")
    public void elSistemaMuestraUnMensajeDeProyectoEliminadoExitosamenteYActualizaLaListaDeProyectosEliminandoSuRegistro() {
    }
}
