package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.DatosEditarProyecto;
import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;
import net.serenitybdd.screenplay.actions.SelectFromOptions;

import java.util.List;

import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.*;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class EditarProyecto implements Task {
    private List<DatosEditarProyecto> datos;
    public  EditarProyecto(List<DatosEditarProyecto> datos){
        this.datos = datos;
    }

    public static EditarProyecto aute(List<DatosEditarProyecto> datos){
        return Instrumented.instanceOf(EditarProyecto.class).withProperties(datos);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_REGRESAR),
                Click.on(BTN_REGRESAR2),
                Click.on(BTN_MENU_PROYECTOS),
                Click.on(BTN_EDITAR_PROYECTO),
                Click.on(INPUT_NOMBRE),
                Enter.theValue(datos.get(0).getNombre()).into(INPUT_NOMBRE),
                Click.on(INPUT_DESCRIPCION),
                Enter.theValue(datos.get(0).getDescripcion()).into(INPUT_DESCRIPCION),
                Scroll.to(INPUT_FECHAFIN),
                Click.on(INPUT_ESTADO),
                SelectFromOptions.byVisibleText(datos.get(0).getEstado()).from(INPUT_ESTADO),
                Click.on(INPUT_PRIORIDAD),
                SelectFromOptions.byVisibleText(datos.get(0).getPrioridad()).from(INPUT_PRIORIDAD),
                Scroll.to(INPUT_PRIORIDAD),
                Scroll.to(INPUT_PRIORIDAD),
                Scroll.to(INPUT_PRIORIDAD),
                Click.on(BTN_GUARDAR),
                AceptarAlerta.despuesDe(5),
                Click.on(BTN_MENU_PROYECTOS),
                Click.on(BTN_EDITAR_PROYECTO)
                );
        theActorInTheSpotlight().remember(SesionVariable.nombreE.toString(), datos.get(0).getNombre());
        theActorInTheSpotlight().remember(SesionVariable.descripcionE.toString(), datos.get(0).getDescripcion());
        theActorInTheSpotlight().remember(SesionVariable.estado.toString(), datos.get(0).getEstado());
        theActorInTheSpotlight().remember(SesionVariable.prioridad.toString(), datos.get(0).getPrioridad());




    }
}
