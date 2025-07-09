package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.questions.Attribute;

import static co.com.AutomatizacionTaskMasterPro.userInterface.AsignacionMiembro.MIEMBRO_AGREGADO;
import static jxl.biff.FormatRecord.logger;

public class ValidacionAsignarMiembro implements Question<Boolean> {
    public static ValidacionAsignarMiembro ValidacionAsignarMiembro() {
        return new ValidacionAsignarMiembro();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Attribute.of(MIEMBRO_AGREGADO).named("value").viewedBy(actor).asString();
            logger.info("Texto capturado: '" + texto + "'");
            return "Nikole   Bernal".equals(texto.trim());
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
