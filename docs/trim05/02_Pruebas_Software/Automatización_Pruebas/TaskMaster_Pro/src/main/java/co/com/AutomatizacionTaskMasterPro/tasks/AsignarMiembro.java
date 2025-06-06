package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;

import static co.com.AutomatizacionTaskMasterPro.userInterface.AsignacionMiembro.*;


public class AsignarMiembro implements Task {
    public static AsignarMiembro ahora() {
        return Instrumented.instanceOf(AsignarMiembro.class).withProperties();
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_PROYECTO),
                Click.on(BTN_MIEMBROS),
                Click.on(BTN_AGREGAR),
                Click.on(MIEMBRO_AGREGADO)
        );
    }
}
