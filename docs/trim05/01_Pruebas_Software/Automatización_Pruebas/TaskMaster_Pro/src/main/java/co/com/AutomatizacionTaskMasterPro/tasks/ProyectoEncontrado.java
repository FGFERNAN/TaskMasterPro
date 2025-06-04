package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.models.NombreProyecto;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;

import java.util.List;

public class ProyectoEncontrado implements Task {
    private List<NombreProyecto> NombreCreado;


    public  ProyectoEncontrado(List<NombreProyecto> NombreCreado){this.NombreCreado = NombreCreado;}

    public static ProyectoEncontrado Proyecto(List<NombreProyecto> NombreCreado){
        return Instrumented.instanceOf(ProyectoEncontrado.class).withProperties(NombreCreado);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on());
    }
}