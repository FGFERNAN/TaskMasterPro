package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.DatosCrearUsuario;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;
import net.serenitybdd.screenplay.actions.SelectFromOptions;

import java.util.List;

import static co.com.AutomatizacionTaskMasterPro.userInterface.EliminacionProyecto.*;


public class EliminarProyecto implements Task {
    public static EliminarProyecto ahora() {
        return Instrumented.instanceOf(EliminarProyecto.class).withProperties();
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_MPROYECTOS),
                Click.on(BTN_ELIMINAR),
                AceptarAlerta.despuesDe(5),
                AceptarAlerta.despuesDe(5),
                Click.on(BTN_MPROYECTOS)
        );
    }
}
