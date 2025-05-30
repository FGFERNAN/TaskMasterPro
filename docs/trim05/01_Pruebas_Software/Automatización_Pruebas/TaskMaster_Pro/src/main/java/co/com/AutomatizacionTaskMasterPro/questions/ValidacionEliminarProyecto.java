package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Attribute;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.EliminacionProyecto.TEXTO_PROYECTO;
import static jxl.biff.FormatRecord.logger;

public class ValidacionEliminarProyecto implements Question<Boolean> {
    public static ValidacionEliminarProyecto ValidacionEliminarProyecto() {
        return new ValidacionEliminarProyecto();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Attribute.of(TEXTO_PROYECTO).named("value").viewedBy(actor).asString();
            logger.info("Texto capturado: '" + texto + "'");
            if (texto != "") {
                return false;
            } else {
                return true;
            }
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return true;
        }
    }
}
