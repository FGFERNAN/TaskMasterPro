package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.questions.ValidacionAsignarMiembro;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionCrearUsuario;
import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import co.com.AutomatizacionTaskMasterPro.tasks.AsignarMiembro;
import co.com.AutomatizacionTaskMasterPro.tasks.EliminarProyecto;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class AsignarProyectoTaskMasterStepsDefinitions {
    @Cuando("^seleccione un proyecto existente y selecciona la opcion miembros y hace click en el boton agregar en el usuario que desee$")
    public void seleccioneUnProyectoExistenteYSeleccionaLaOpcionMiembrosYHaceClickEnElBotonAgregarEnElUsuarioQueDesee() {
        theActorInTheSpotlight().attemptsTo(AsignarMiembro.ahora());
    }

    @Entonces("^los usuarios seleccionados deben ser agregados correctamente al proyecto y reflejarse en la lista de miembros del mismo$")
    public void losUsuariosSeleccionadosDebenSerAgregadosCorrectamenteAlProyectoYReflejarseEnLaListaDeMiembrosDelMismo() {
        theActorInTheSpotlight().should(seeThat(ValidacionAsignarMiembro.ValidacionAsignarMiembro()));
    }
}
