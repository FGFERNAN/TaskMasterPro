package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.interactions.AceptarAlerta;
import co.com.AutomatizacionTaskMasterPro.models.DatosCrearUsuario;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;
import net.serenitybdd.screenplay.actions.SelectFromOptions;

import java.util.List;

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
                Enter.theValue(datos.get(0).getNombre()).into(INPUT_NOMBRE),
                Click.on(INPUT_APELLIDOS),
                Enter.theValue(datos.get(0).getApellidos()).into(INPUT_APELLIDOS),
                Click.on(INPUT_EMAIL),
                Enter.theValue(datos.get(0).getEmail()).into(INPUT_EMAIL),
                Click.on(INPUT_PHONE),
                Enter.theValue(datos.get(0).getPhone()).into(INPUT_PHONE),
                Scroll.to(INPUT_PHONE),
                Scroll.to(INPUT_PHONE),
                Click.on(INPUT_TDOCUMENTO),
                SelectFromOptions.byVisibleText("Tarjeta de Identidad").from(INPUT_TDOCUMENTO),
                Click.on(INPUT_ID),
                Enter.theValue(datos.get(0).getId()).into(INPUT_ID),
                Click.on(INPUT_PASSWORD),
                Enter.theValue(datos.get(0).getContrasena()).into(INPUT_PASSWORD),
                Scroll.to(INPUT_PASSWORD),
                Scroll.to(INPUT_PASSWORD),
                Click.on(INPUT_ROL),
                SelectFromOptions.byVisibleText("Lider de Proyecto").from(INPUT_ROL),
                Scroll.to(INPUT_ROL),
                Click.on(BTN_GUARDAR),
                AceptarAlerta.despuesDe(5)
        );
    }
}
