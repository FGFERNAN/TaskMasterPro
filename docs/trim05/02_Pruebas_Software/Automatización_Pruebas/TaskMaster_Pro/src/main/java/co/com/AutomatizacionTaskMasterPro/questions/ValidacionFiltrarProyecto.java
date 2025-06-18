package co.com.AutomatizacionTaskMasterPro.questions;

import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.FiltrarProyecto.*;
import static jxl.biff.FormatRecord.logger;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class ValidacionFiltrarProyecto implements Question<Boolean> {
    public static ValidacionFiltrarProyecto ValidacionFiltrarProyecto() {

        return new ValidacionFiltrarProyecto();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        String projectName = theActorInTheSpotlight().recall(SesionVariable.nombreFiltro.toString());
        logger.info("Nombre Sesion Variable: '" + projectName + "'");
        try {
            String nombre = Text.of(TEXTO_CONFIRMACION).viewedBy(actor).asString();
            logger.info("Nombre capturado: '" + nombre + "'");
            return projectName.equals(nombre);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
