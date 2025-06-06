package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;


import static co.com.AutomatizacionTaskMasterPro.userInterface.ActualizacionProyecto.TEXTO_CONFIRMACION;
import static jxl.biff.FormatRecord.logger;

public class ValidacionEditarProyecto implements Question<Boolean> {
    public static ValidacionEditarProyecto ValidacionEditarProyecto() {

        return new ValidacionEditarProyecto();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(TEXTO_CONFIRMACION).viewedBy(actor).asString();
            return "TaskMaster Pro".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
