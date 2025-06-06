package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.DatosRecuperarContraseña;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;
import net.serenitybdd.screenplay.actions.SelectFromOptions;

import java.util.List;

import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.INPUT_NOMBRE;
import static co.com.AutomatizacionTaskMasterPro.userInterface.RecuperaracionContraseña.*;

public class RecuperarContraseña implements Task {
    private List<DatosRecuperarContraseña> datos;
    public  RecuperarContraseña(List<DatosRecuperarContraseña> datos){
        this.datos = datos;
    }

    public static RecuperarContraseña aute(List<DatosRecuperarContraseña> datos){
        return Instrumented.instanceOf(RecuperarContraseña.class).withProperties(datos);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Scroll.to(INPUT_PASSWORD),
                Click.on(BTN_RECUPERARC),
                Click.on(INPUT_EMAIL),
                Enter.theValue(datos.get(0).getEmail()).into(INPUT_EMAIL),
                Click.on(BTN_RECUPERAR_CONTRASEÑA),
                AceptarAlerta.despuesDe(5)
                );
    }
}
