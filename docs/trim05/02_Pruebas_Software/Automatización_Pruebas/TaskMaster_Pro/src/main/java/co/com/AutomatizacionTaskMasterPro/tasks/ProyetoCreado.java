package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.InformacionProyecto;
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
import static co.com.AutomatizacionTaskMasterPro.userInterface.CrearProyecto.*;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class ProyetoCreado implements Task {
    private List<InformacionProyecto> Informacion;


    public  ProyetoCreado(List<InformacionProyecto> Informacion){this.Informacion = Informacion;}

    public static ProyetoCreado Proyecto(List<InformacionProyecto> Informacion){
        return Instrumented.instanceOf(ProyetoCreado.class).withProperties(Informacion);
    }

    String letrasRandom = RandomStringUtils.random(5, true, false);
    String descripcionRandom = RandomStringUtils.random(20, true, false);


    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_REGRESAR),
                Click.on(BTN_REGRESAR2),
                Click.on(INPUT_CREARPROYECTO),
                Click.on(INPUT_NOMBRE),
                Enter.theValue(Informacion.get(0).getNombre() + letrasRandom).into(INPUT_NOMBRE),
                Click.on(INPUT_DESCRIPCION),
                Enter.theValue(Informacion.get(0).getDescripcion() + " " + descripcionRandom ).into(INPUT_DESCRIPCION),
                Click.on(INPUT_FECHAINICIO),
                Enter.theValue(Informacion.get(0).getFechaInicio()).into(INPUT_FECHAINICIO),
                Click.on(INPUT_FECHAFIN),
                Enter.theValue(Informacion.get(0).getFechaFin()).into(INPUT_FECHAFIN),
                Scroll.to(INPUT_FECHAFIN),
                Click.on(BTN_ESTADO),
                Click.on(BTN_ESTADO1),
                Click.on(BTN_PRIORIDAD),
                Click.on(BTN_PRIORIDAD1),
                Scroll.to(BTN_GUARDAR),
                Click.on(BTN_GUARDAR),
                AceptarAlerta.despuesDe(5),
                Click.on(BTN_MPROYECTOS),
                Click.on(BTN_EDITAR("edit-" + Informacion.get(0).getNombre() + letrasRandom))
        );
        theActorInTheSpotlight().remember(SesionVariable.nombreProyecto.toString(), Informacion.get(0).getNombre() + letrasRandom);
        theActorInTheSpotlight().remember(SesionVariable.descripcion.toString(), Informacion.get(0).getDescripcion() + " " + descripcionRandom);
    }
}
