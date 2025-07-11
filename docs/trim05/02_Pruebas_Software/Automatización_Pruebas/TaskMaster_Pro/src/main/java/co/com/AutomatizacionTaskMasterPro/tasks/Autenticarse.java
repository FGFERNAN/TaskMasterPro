package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.CredencialesInicioSesion;
import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;

import java.util.List;

import static co.com.AutomatizacionTaskMasterPro.userInterface.Autenticacion.*;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class Autenticarse implements Task {
    private List<CredencialesInicioSesion> credenciales;


    public  Autenticarse(List<CredencialesInicioSesion> credenciales){
        this.credenciales = credenciales;
    }

    public static Autenticarse aute(List<CredencialesInicioSesion> credenciales){
        return Instrumented.instanceOf(Autenticarse.class).withProperties(credenciales);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(INPUT_EMAIL),
                Enter.theValue(credenciales.get(0).getEmail()).into(INPUT_EMAIL),
                Click.on(INPUT_PASSWORD),
                Scroll.to(INPUT_PASSWORD),
                Enter.theValue(credenciales.get(0).getPassword()).into(INPUT_PASSWORD),
                Scroll.to(INPUT_PASSWORD),
                Click.on(BTN_INICIOSESION),
                AceptarAlerta.despuesDe(5),
                Click.on(BTN_PERFIL),
                Click.on(BTN_EDITAR_PERFIL)
        );
        theActorInTheSpotlight().remember(SesionVariable.correo.toString(), credenciales.get(0).getEmail());
    }
}
