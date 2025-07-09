package co.com.AutomatizacionTaskMasterPro.questions;

import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Attribute;
import net.serenitybdd.screenplay.questions.Text;


import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.*;

import static jxl.biff.FormatRecord.logger;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class ValidacionEditarProyecto implements Question<Boolean> {
    public static ValidacionEditarProyecto ValidacionEditarProyecto() {

        return new ValidacionEditarProyecto();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        String projectName = theActorInTheSpotlight().recall(SesionVariable.nombreE.toString());
        logger.info("Nombre Sesion Variable: '" + projectName + "'");

        String descriptionProject = theActorInTheSpotlight().recall(SesionVariable.descripcionE.toString());
        logger.info("Descripción Sesion Variable: '" + descriptionProject + "'");

        String state = theActorInTheSpotlight().recall(SesionVariable.estado.toString());
        logger.info("Estado Sesion Variable: '" + state + "'");

        String priority = theActorInTheSpotlight().recall(SesionVariable.prioridad.toString());
        logger.info("Prioridad Sesion Variable: '" + priority + "'");
        try {
            String nombre = Attribute.of(CONFIRMACION_NOMBRE).named("value").viewedBy(actor).asString();
            logger.info("Nombre capturado: '" + nombre + "'");

            String descripcion = Attribute.of(CONFIRMACION_DESCRIPCION).named("value").viewedBy(actor).asString();
            logger.info("Descripcion capturada: '" + descripcion + "'");

            String estado = Attribute.of(CONFIRMACION_ESTADO).named("value").viewedBy(actor).asString();
            logger.info("Estado capturado: '" + estado + "'");

            String prioridad = Attribute.of(CONFIRMACION_PRIORIDAD).named("value").viewedBy(actor).asString();
            logger.info("Prioridad capturada: '" + prioridad + "'");
            return nombre.equals(projectName)
                    && descripcion.equals(descriptionProject)
                    && estado.equals(state)
                    && prioridad.equals(priority);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
