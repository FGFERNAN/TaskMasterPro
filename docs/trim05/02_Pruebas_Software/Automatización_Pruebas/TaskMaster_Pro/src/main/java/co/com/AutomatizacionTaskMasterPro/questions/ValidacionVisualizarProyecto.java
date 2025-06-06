package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.VisualizarProyecto.MENSAJE_EXITO;
import static jxl.biff.FormatRecord.logger;

public class ValidacionVisualizarProyecto implements Question<Boolean> {
    public static ValidacionVisualizarProyecto validacionVisualizarProyecto() {
        return new ValidacionVisualizarProyecto();
    }
    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(MENSAJE_EXITO).viewedBy(actor).asString();
            return "Software".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
