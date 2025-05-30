package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.CreacionUsuario.ID_VALIDACION;
import static jxl.biff.FormatRecord.logger;

public class ValidacionCrearUsuario implements Question<Boolean> {
    public static ValidacionCrearUsuario ValidacionCrearUsuario() {
        return new ValidacionCrearUsuario();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(ID_VALIDACION).viewedBy(actor).asString();
            return "1030523678".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
