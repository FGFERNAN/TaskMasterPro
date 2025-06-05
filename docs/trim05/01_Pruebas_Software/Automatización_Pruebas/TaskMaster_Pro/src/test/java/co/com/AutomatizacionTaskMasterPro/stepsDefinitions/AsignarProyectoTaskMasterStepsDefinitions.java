package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.questions.ValidacionAsignarMiembro;
import co.com.AutomatizacionTaskMasterPro.tasks.AsignarMiembro;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class AsignarProyectoTaskMasterStepsDefinitions {
    @Cuando("^hace click en el boton agregar en el usuario que desee$")
    public void haceClickEnElBotonAgregarEnElUsuarioQueDesee() {
        theActorInTheSpotlight().attemptsTo(AsignarMiembro.ahora());
    }
    @Entonces("^los usuarios seleccionados deben ser agregados correctamente al proyecto y reflejarse en la lista de miembros del mismo$")
    public void losUsuariosSeleccionadosDebenSerAgregadosCorrectamenteAlProyectoYReflejarseEnLaListaDeMiembrosDelMismo() {
        theActorInTheSpotlight().should(seeThat(ValidacionAsignarMiembro.ValidacionAsignarMiembro()));
    }
}
