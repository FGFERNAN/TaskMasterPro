package co.com.AutomatizacionTaskMasterPro.tasks;

import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;

import static co.com.AutomatizacionTaskMasterPro.userInterface.VisualizarProyecto.*;

public class VisualizarProyecto implements Task {
    public static VisualizarProyecto ahora() {return Instrumented.instanceOf(VisualizarProyecto.class).withProperties();
    }
    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_MPROYECTO),
                Click.on(VIS_PROYECTOS)
        );
    }
}
