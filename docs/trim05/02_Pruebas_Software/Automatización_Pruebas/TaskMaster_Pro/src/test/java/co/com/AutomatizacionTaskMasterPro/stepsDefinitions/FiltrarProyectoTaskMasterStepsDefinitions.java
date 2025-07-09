package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.models.NombreProyecto;
import co.com.AutomatizacionTaskMasterPro.questions.ValidacionFiltrarProyecto;
import co.com.AutomatizacionTaskMasterPro.tasks.ProyectoEncontrado;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class FiltrarProyectoTaskMasterStepsDefinitions {
    @Cuando("^seleccione el icono de lupa y ingrese el nombre del proyecto y lo seleccione$")
    public void seleccioneElIconoDeLupaYIngreseElNombreDelProyectoYLoSeleccione(List<NombreProyecto>NombreCreado) {
        theActorInTheSpotlight().attemptsTo(ProyectoEncontrado.Proyecto(NombreCreado));
    }

    @Entonces("^el sistema abre la interfaz de ese proyecto$")
    public void elSistemaAbreLaInterfazDeEseProyecto(){
        theActorInTheSpotlight().should(seeThat(ValidacionFiltrarProyecto.ValidacionFiltrarProyecto()));
    }
}