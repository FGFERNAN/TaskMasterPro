package co.com.AutomatizacionTaskMasterPro.tasks;
import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;

import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.BTN_REGRESAR;
import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.BTN_REGRESAR2;
import static co.com.AutomatizacionTaskMasterPro.userInterface.AsignacionMiembro.MIEMBRO_AGREGADO;
import static co.com.AutomatizacionTaskMasterPro.userInterface.EliminacionMiembro.*;
import static net.serenitybdd.screenplay.waits.WaitUntil.the;
import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isNotVisible;
import net.serenitybdd.screenplay.waits.WaitUntil;
import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isEnabled;


public class EliminarMiembro implements Task {
    public static EliminarMiembro ahora() {
        return Instrumented.instanceOf(EliminarMiembro.class).withProperties();
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_REGRESAR),
                Click.on(BTN_REGRESAR2),
                Click.on(BTN_PROYECTO),
                Click.on(BTN_MIEMBROS),
                WaitUntil.the(BTN_ELIMINAR, isEnabled()).forNoMoreThan(5).seconds(),
                Click.on(BTN_ELIMINAR),
                AceptarAlerta.despuesDe(5),
                AceptarAlerta.despuesDe(5)
                );
    }
}



