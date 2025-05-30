package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.CrearProyecto.CONFIRMACION_CREARP;
import static jxl.biff.FormatRecord.logger;

public class ValidacionCrearProyecto implements Question<Boolean> {
    public static ValidacionCrearProyecto ValidacionCrearProyecto() {
        return new ValidacionCrearProyecto();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(CONFIRMACION_CREARP).viewedBy(actor).asString();
            return "".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
