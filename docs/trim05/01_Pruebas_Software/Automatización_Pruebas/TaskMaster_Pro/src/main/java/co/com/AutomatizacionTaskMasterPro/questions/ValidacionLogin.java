package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.Autenticacion.CONFIRMACION_LOGIN;
import static jxl.biff.FormatRecord.logger;

public class ValidacionLogin implements Question<Boolean> {
    public static ValidacionLogin validacionLogin() {
        return new ValidacionLogin();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(CONFIRMACION_LOGIN).viewedBy(actor).asString();
            return "¿Que Proyecto Crearemos Hoy?".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
