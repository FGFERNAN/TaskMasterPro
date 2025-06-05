package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.FiltrarProyecto.*;
import static jxl.biff.FormatRecord.logger;

public class ValidacionFiltrarProyecto implements Question<Boolean> {
    public static ValidacionFiltrarProyecto ValidacionFiltrarProyecto() {

        return new ValidacionFiltrarProyecto();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(TEXTO_CONFIRMACION).viewedBy(actor).asString();
            return "Software".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
