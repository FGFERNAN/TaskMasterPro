package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import cucumber.api.DataTable;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class CrearProyectoTaskMasterStepsDefinitions {
    @Cuando("^da click en el boton de crear proyecto y ingrese todos los campos del formulario de creacion y hace click en el boton Guardar$")
    public void daClickEnElBotonDeCrearProyectoYIngreseTodosLosCamposDelFormularioDeCreacionYHaceClickEnElBotonGuardar(DataTable arg1) {
    }

    @Entonces("^el sistema debe registrar correctamente el nuevo proyecto$")
    public void elSistemaDebeRegistrarCorrectamenteElNuevoProyecto() {
    }
}
