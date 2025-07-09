package co.com.AutomatizacionTaskMasterPro.questions;

import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Attribute;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.CrearProyecto.*;
import static jxl.biff.FormatRecord.logger;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class ValidacionCrearProyecto implements Question<Boolean> {
    public static ValidacionCrearProyecto ValidacionCrearProyecto() {
        return new ValidacionCrearProyecto();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        String projectName = theActorInTheSpotlight().recall(SesionVariable.nombreProyecto.toString());
        logger.info("Nombre Sesion Variable: '" + projectName + "'");

        String descriptionProject = theActorInTheSpotlight().recall(SesionVariable.descripcion.toString());
        logger.info("Descripcion Sesion Variable: '" + descriptionProject + "'");

        String statusProject = theActorInTheSpotlight().recall(SesionVariable.estadoCrear.toString());
        logger.info("Estado Sesion Variable: '" + statusProject + "'");

        String priorityProject = theActorInTheSpotlight().recall(SesionVariable.prioridadCrear.toString());
        logger.info("Prioridad Sesion Variable: '" + priorityProject + "'");

        try {
            String nombre = Attribute.of(CONFIRMACION_NOMBRE).named("value").viewedBy(actor).asString();
            logger.info("Nombre capturado: '" + nombre + "'");

            String descripcion = Attribute.of(CONFIRMACION_DESCRIPCION).named("value").viewedBy(actor).asString();
            logger.info("Descripcion capturada: '" + descripcion + "'");

            String estado = Text.of(ESTADO).viewedBy(actor).asString();
            logger.info("Estado capturado: '" + estado + "'");

            String prioridad = Text.of(PRIORIDAD).viewedBy(actor).asString();
            logger.info("Prioridad capturada: '" + prioridad + "'");

            return nombre.equals(projectName)
                    && descripcion.equals(descriptionProject)
                    && statusProject.equals(estado)
                    && priorityProject.equals(prioridad);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
