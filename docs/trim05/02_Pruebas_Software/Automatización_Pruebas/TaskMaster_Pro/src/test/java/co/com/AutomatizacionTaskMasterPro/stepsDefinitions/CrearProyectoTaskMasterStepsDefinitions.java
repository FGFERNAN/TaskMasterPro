package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.models.CredencialesInicioSesion;
import co.com.AutomatizacionTaskMasterPro.models.InformacionProyecto;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionCrearProyecto;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionLogin;
import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import co.com.AutomatizacionTaskMasterPro.tasks.Autenticarse;
import co.com.AutomatizacionTaskMasterPro.tasks.ProyetoCreado;
import co.com.AutomatizacionTaskMasterPro.userInterface.CrearProyecto;
import cucumber.api.DataTable;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class CrearProyectoTaskMasterStepsDefinitions {
    @Cuando("^selecciona la opción de crear un nuevo proyecto$")
    public void seleccionaLaOpciónDeCrearUnNuevoProyecto(List<InformacionProyecto> Informacion) {
        theActorInTheSpotlight().attemptsTo(ProyetoCreado.Proyecto(Informacion));
    }

    @Entonces("^el sistema debe registrar correctamente el nuevo proyecto$")
    public void elSistemaDebeRegistrarCorrectamenteElNuevoProyecto() {
        theActorInTheSpotlight().should(seeThat(ValidacionCrearProyecto.ValidacionCrearProyecto()));
    }
}
