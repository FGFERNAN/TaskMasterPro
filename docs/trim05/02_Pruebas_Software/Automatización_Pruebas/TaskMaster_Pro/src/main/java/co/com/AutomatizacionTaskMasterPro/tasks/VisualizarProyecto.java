package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.models.DatosVisualizarProyecto;
import co.com.AutomatizacionTaskMasterPro.models.InformacionProyecto;
import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;

import java.util.List;

import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.BTN_REGRESAR;
import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.BTN_REGRESAR2;
import static co.com.AutomatizacionTaskMasterPro.userInterface.VisualizarProyecto.*;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class VisualizarProyecto implements Task {
    private List<DatosVisualizarProyecto> datos;

    public  VisualizarProyecto(List<DatosVisualizarProyecto> datos){this.datos = datos;}
    public static VisualizarProyecto ahora(List<DatosVisualizarProyecto> datos) {
        return Instrumented.instanceOf(VisualizarProyecto.class).withProperties(datos);
    }
    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_REGRESAR),
                Click.on(BTN_REGRESAR2),
                Click.on(BTN_MPROYECTO),
                Click.on(VIS_PROYECTOS)
        );
        theActorInTheSpotlight().remember(SesionVariable.nombreVisualizar.toString(), datos.get(0).getNombre());
        theActorInTheSpotlight().remember(SesionVariable.porcentaje.toString(), datos.get(0).getPorcentaje());

    }
}
