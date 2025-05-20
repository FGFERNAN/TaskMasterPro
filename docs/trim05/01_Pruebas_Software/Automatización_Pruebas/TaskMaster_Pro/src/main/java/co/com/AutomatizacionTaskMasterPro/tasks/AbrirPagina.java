package co.com.AutomatizacionTaskMasterPro.tasks;

import co.com.AutomatizacionTaskMasterPro.userInterface.crearProyectoTaskMaster;
import co.com.AutomatizacionTaskMasterPro.userInterface.crearUsuarioTaskMaster;
import co.com.AutomatizacionTaskMasterPro.userInterface.inicioTaskMaster;
import co.com.AutomatizacionTaskMasterPro.userInterface.interfazPrincipalTaskMaster;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.Tasks;
import net.serenitybdd.screenplay.actions.Open;

public class AbrirPagina implements Task {

    inicioTaskMaster inicioTaskMaster;
            public static AbrirPagina laPagina() {
                return Tasks.instrumented(AbrirPagina.class);
    }

    crearProyectoTaskMaster crearProyectoTaskMaster;
            public static AbrirPagina crearProyecto() {
                return Tasks.instrumented(AbrirPagina.class);
    }

    crearUsuarioTaskMaster crearUsuarioTaskMaster;
            public static AbrirPagina crearUsuario() {
                return Tasks.instrumented(AbrirPagina.class);
    }

    interfazPrincipalTaskMaster interfazPrincipalTaskMaster;
            public static AbrirPagina interfazPrincipal() {
                return Tasks.instrumented(AbrirPagina.class);
    }


    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.wasAbleTo(Open.browserOn(inicioTaskMaster));
        actor.wasAbleTo(Open.browserOn(crearProyectoTaskMaster));
        actor.wasAbleTo((Open.browserOn(crearUsuarioTaskMaster)));
        actor.wasAbleTo((Open.browserOn(interfazPrincipalTaskMaster)));
    }
}
