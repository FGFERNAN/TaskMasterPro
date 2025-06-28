package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.DatosCrearTarea;
import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;
import org.apache.commons.lang3.RandomStringUtils;

import java.util.List;

import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.BTN_REGRESAR;
import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.BTN_REGRESAR2;
import static co.com.AutomatizacionTaskMasterPro.userInterface.CreacionTarea.*;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class CrearTarea implements Task {

    private List<DatosCrearTarea> datos;

    public CrearTarea(List<DatosCrearTarea> datos) {
        this.datos = datos;
    }

    public static CrearTarea aute(List<DatosCrearTarea> datos){
        return Instrumented.instanceOf(CrearTarea.class).withProperties(datos);
    }

    String letrasRandom = RandomStringUtils.random(5, true, false);
    String descripcionRandom = RandomStringUtils.random(20, true, false);

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_REGRESAR),
                Click.on(BTN_REGRESAR2),
                Click.on(BTN_PROYECTO),
                Click.on(BTN_CREAR_TAREA),
                Click.on(INPUT_NOMBRE),
                Enter.theValue(datos.get(0).getNombre() + letrasRandom).into(INPUT_NOMBRE),
                Click.on(INPUT_DESCRIPCION),
                Enter.theValue(datos.get(0).getDescripcion() + " " + descripcionRandom).into(INPUT_DESCRIPCION),
                Click.on(INPUT_FECHAINICIO),
                Enter.theValue(datos.get(0).getFechaInicio()).into(INPUT_FECHAINICIO),
                Click.on(INPUT_FECHAFIN),
                Scroll.to(INPUT_FECHAFIN),
                Enter.theValue(datos.get(0).getFechaFin()).into(INPUT_FECHAFIN),
                Click.on(SELECT_ESTADO),
                Click.on(ESTADO1),
                Click.on(SELECT_PRIORIDAD),
                Click.on(PRIORIDAD1),
                Scroll.to(SELECT_PRIORIDAD),
                Click.on(BTN_GUARDAR),
                AceptarAlerta.despuesDe(5),
                Click.on(BTN_ENCURSO),
                Click.on(BTN_EDITAR("edit-" + datos.get(0).getNombre() + letrasRandom))
        );
        theActorInTheSpotlight().remember(SesionVariable.nombreTarea.toString(), datos.get(0).getNombre() + letrasRandom);
        theActorInTheSpotlight().remember(SesionVariable.descripcionTarea.toString(), datos.get(0).getDescripcion() + " " + descripcionRandom);
        theActorInTheSpotlight().remember(SesionVariable.estadoTarea.toString(), datos.get(0).getEstado());
        theActorInTheSpotlight().remember(SesionVariable.prioridadTarea.toString(), datos.get(0).getPrioridad());
    }
}
