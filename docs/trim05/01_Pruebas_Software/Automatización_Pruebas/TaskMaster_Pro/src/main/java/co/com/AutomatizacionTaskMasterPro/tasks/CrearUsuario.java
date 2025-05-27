package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.DatosCrearUsuario;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;

import java.util.List;

import static co.com.AutomatizacionTaskMasterPro.userInterface.Autenticacion.INPUT_EMAIL;
import static co.com.AutomatizacionTaskMasterPro.userInterface.CreacionUsuario.*;


public class CrearUsuario implements Task {
    private List<DatosCrearUsuario> datos;


    public  CrearUsuario(List<DatosCrearUsuario> datos){
        this.datos = datos;
    }

    public static CrearUsuario aute(List<DatosCrearUsuario> datos){
        return Instrumented.instanceOf(CrearUsuario.class).withProperties(datos);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_PERFIL),
                Click.on(BTN_GUSUARIOS),
                Click.on(BTN_CUSUARIO),
                Click.on(INPUT_NOMBRE),
                Enter.theValue(datos.get(0).getNombre()).into(INPUT_NOMBRE)
        );
    }
}
