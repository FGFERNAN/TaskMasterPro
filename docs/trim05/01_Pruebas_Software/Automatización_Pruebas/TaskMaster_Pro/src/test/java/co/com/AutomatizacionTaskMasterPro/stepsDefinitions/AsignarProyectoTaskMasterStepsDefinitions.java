package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class AsignarProyectoTaskMasterStepsDefinitions {
    @Cuando("^seleccione un proyecto existente y selecciona la opcion miembros y hace click en el boton agregar en el usuario que desee$")
    public void seleccioneUnProyectoExistenteYSeleccionaLaOpcionMiembrosYHaceClickEnElBotonAgregarEnElUsuarioQueDesee() {
    }

    @Entonces("^los usuarios seleccionados deben ser agregados correctamente al proyecto y reflejarse en la lista de miembros del mismo$")
    public void losUsuariosSeleccionadosDebenSerAgregadosCorrectamenteAlProyectoYReflejarseEnLaListaDeMiembrosDelMismo() {
    }
}
