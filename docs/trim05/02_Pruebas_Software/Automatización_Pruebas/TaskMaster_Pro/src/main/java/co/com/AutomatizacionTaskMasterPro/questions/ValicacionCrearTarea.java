package co.com.AutomatizacionTaskMasterPro.questions;

import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Attribute;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.CreacionTarea.*;
import static jxl.biff.FormatRecord.logger;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class ValicacionCrearTarea implements Question<Boolean> {
    public static ValicacionCrearTarea ValicacionCrearTarea() {
        return new ValicacionCrearTarea();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        String taskName = theActorInTheSpotlight().recall(SesionVariable.nombreTarea.toString());
        logger.info("Nombre Sesion Variable: '" + taskName + "'");

        String descriptionTask = theActorInTheSpotlight().recall(SesionVariable.descripcionTarea.toString());
        logger.info("Descripcion Sesion Variable: '" + descriptionTask + "'");

        String statusTask = theActorInTheSpotlight().recall(SesionVariable.estadoTarea.toString());
        logger.info("Estado Sesion Variable: '" + statusTask + "'");

        String priorityTask = theActorInTheSpotlight().recall(SesionVariable.prioridadTarea.toString());
        logger.info("Prioridad Sesion Variable: '" + priorityTask + "'");

        try {
            String nombre = Attribute.of(VERIFICACION_NOMBRE).named("value").viewedBy(actor).asString();
            logger.info("Nombre capturado: '" + nombre + "'");

            String descripcion = Attribute.of(VERIFICACION_DESCRIPCION).named("value").viewedBy(actor).asString();
            logger.info("Descripcion capturada: '" + descripcion + "'");

            String estado = Text.of(VERIFICACION_ESTADO).viewedBy(actor).asString();
            logger.info("Estado capturado: '" + estado + "'");

            String prioridad = Text.of(VERIFICACION_PRIORIDAD).viewedBy(actor).asString();
            logger.info("Prioridad capturada: '" + prioridad + "'");

            return nombre.equals(taskName)
                    && descripcion.equals(descriptionTask)
                    && statusTask.equals(estado)
                    && priorityTask.equals(prioridad);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
