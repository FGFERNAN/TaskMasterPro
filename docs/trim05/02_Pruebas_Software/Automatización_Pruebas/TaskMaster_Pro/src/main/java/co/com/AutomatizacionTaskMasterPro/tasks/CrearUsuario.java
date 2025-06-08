package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.DatosCrearUsuario;
import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.bytebuddy.utility.RandomString;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;
import net.serenitybdd.screenplay.actions.SelectFromOptions;
import org.apache.commons.lang3.RandomStringUtils;

import java.util.List;
import java.util.Random;

import static co.com.AutomatizacionTaskMasterPro.userInterface.CreacionUsuario.*;
import static jxl.biff.FormatRecord.logger;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;


public class CrearUsuario implements Task {
    private List<DatosCrearUsuario> datos;


    public  CrearUsuario(List<DatosCrearUsuario> datos){
        this.datos = datos;
    }

    public static CrearUsuario aute(List<DatosCrearUsuario> datos){
        return Instrumented.instanceOf(CrearUsuario.class).withProperties(datos);
    }

    String letrasRandom = RandomStringUtils.random(2, true, false);
    String numerosRandom = RandomStringUtils.random(7, false, true);

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(BTN_PERFIL),
                Click.on(BTN_GUSUARIOS),
                Click.on(BTN_CUSUARIO),
                Click.on(INPUT_NOMBRE),
                Enter.theValue(datos.get(0).getNombre() + letrasRandom).into(INPUT_NOMBRE),
                Click.on(INPUT_APELLIDOS),
                Enter.theValue(datos.get(0).getApellidos() + letrasRandom).into(INPUT_APELLIDOS),
                Click.on(INPUT_EMAIL),
                Enter.theValue(datos.get(0).getEmail()+letrasRandom).into(INPUT_EMAIL),
                Click.on(INPUT_PHONE),
                Enter.theValue(datos.get(0).getPhone()+numerosRandom).into(INPUT_PHONE),
                Scroll.to(INPUT_PHONE),
                Scroll.to(INPUT_PHONE),
                Click.on(INPUT_TDOCUMENTO),
                SelectFromOptions.byVisibleText("Tarjeta de Identidad").from(INPUT_TDOCUMENTO),
                Click.on(INPUT_ID),
                Enter.theValue(datos.get(0).getId()+numerosRandom).into(INPUT_ID),
                Click.on(INPUT_PASSWORD),
                Enter.theValue(datos.get(0).getContrasena()).into(INPUT_PASSWORD),
                Scroll.to(INPUT_PASSWORD),
                Scroll.to(INPUT_PASSWORD),
                Click.on(INPUT_ROL),
                SelectFromOptions.byVisibleText(datos.get(0).getRol()).from(INPUT_ROL),
                Scroll.to(INPUT_ROL),
                Click.on(BTN_GUARDAR),
                AceptarAlerta.despuesDe(5)
        );
        theActorInTheSpotlight().remember(SesionVariable.id.toString(), datos.get(0).getId()+numerosRandom);
        theActorInTheSpotlight().remember(SesionVariable.nombre.toString(), datos.get(0).getNombre() + letrasRandom + " " + datos.get(0).getApellidos() + letrasRandom);
        theActorInTheSpotlight().remember(SesionVariable.email.toString(), datos.get(0).getEmail()+letrasRandom);
        theActorInTheSpotlight().remember(SesionVariable.rol.toString(), datos.get(0).getRol());
    }
}
