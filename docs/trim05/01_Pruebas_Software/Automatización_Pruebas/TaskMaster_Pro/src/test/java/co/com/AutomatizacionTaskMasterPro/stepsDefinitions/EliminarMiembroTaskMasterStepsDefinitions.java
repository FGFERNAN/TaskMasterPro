package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.questions.ValidacionAsignarMiembro;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionEliminarMiembro;
import co.com.AutomatizacionTaskMasterPro.tasks.AsignarMiembro;
import co.com.AutomatizacionTaskMasterPro.tasks.EliminarMiembro;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;



import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class EliminarMiembroTaskMasterStepsDefinitions {
    @Cuando("^seleccione un usuario asignado a un proyecto y hace click en el boton de eliminar usuario y confirma la eliminacion del miembro$")
    public void seleccioneUnUsuarioAsignadoAUnProyectoYHaceClickEnElBotonDeEliminarUsuarioYConfirmaLaEliminacionDelMiembro() {
        theActorInTheSpotlight().attemptsTo(EliminarMiembro.ahora());
    }


    @Entonces("^el sistema muestra un mensaje de miembro eliminado exitosamente y actualiza la lista de usuarios asignados a ese proyecto$")
    public void elSistemaMuestraUnMensajeDeMiembroEliminadoExitosamenteYActualizaLaListaDeUsuariosAsignadosAEseProyecto() {
        theActorInTheSpotlight().should(seeThat(ValidacionEliminarMiembro.ValidacionEliminarMiembro()));
    }
}
