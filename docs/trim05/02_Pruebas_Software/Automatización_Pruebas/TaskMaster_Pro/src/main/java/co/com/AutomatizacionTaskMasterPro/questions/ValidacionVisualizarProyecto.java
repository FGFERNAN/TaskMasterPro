package co.com.AutomatizacionTaskMasterPro.questions;

import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.VisualizarProyecto.MENSAJE_EXITO;
import static co.com.AutomatizacionTaskMasterPro.userInterface.VisualizarProyecto.PORCENTAJE;
import static jxl.biff.FormatRecord.logger;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class ValidacionVisualizarProyecto implements Question<Boolean> {
    public static ValidacionVisualizarProyecto validacionVisualizarProyecto() {
        return new ValidacionVisualizarProyecto();
    }
    @Override
    public Boolean answeredBy(Actor actor) {
        String nameProject = theActorInTheSpotlight().recall(SesionVariable.nombreVisualizar.toString());
        logger.info("Nombre Sesion Variable: '" + nameProject + "'");

        String porcentaje = theActorInTheSpotlight().recall(SesionVariable.porcentaje.toString());
        logger.info("Porcentaje Sesion Variable: '" + porcentaje + "'");
        try {
            String nombre = Text.of(MENSAJE_EXITO).viewedBy(actor).asString();
            logger.info("Nombre capturado: '" + nombre + "'");

            String texto = Text.of(PORCENTAJE).viewedBy(actor).asString();
            logger.info("Porcentaje capturado: '" + texto + "'");
            return nameProject.equals(nombre)
                    && porcentaje.equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
