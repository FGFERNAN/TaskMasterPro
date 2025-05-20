package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import cucumber.api.DataTable;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class CrearProyectoTaskMasterStepsDefinitions {
    @Dado("^que el usuario ha iniciado sesion y tiene permisos de admin o lider de proyecto$")
    public void queElUsuarioHaIniciadoSesionYTienePermisosDeAdminOLiderDeProyecto() {
        theActorInTheSpotlight().wasAbleTo(AbrirPagina.crearProyecto());
    }

    @Dado("^ha dado click en el boton de crear proyecto$")
    public void haDadoClickEnElBotonDeCrearProyecto() {
    }

    @Cuando("^ingrese todos los campos del formulario de creacion$")
    public void ingreseTodosLosCamposDelFormularioDeCreacion() {
    }

    @Cuando("^hace click en el boton Guardar$")
    public void haceClickEnElBotonGuardar(DataTable arg1) {
    }

    @Entonces("^el sistema debe registrar correctamente el nuevo proyecto$")
    public void elSistemaDebeRegistrarCorrectamenteElNuevoProyecto() {
    }

}
