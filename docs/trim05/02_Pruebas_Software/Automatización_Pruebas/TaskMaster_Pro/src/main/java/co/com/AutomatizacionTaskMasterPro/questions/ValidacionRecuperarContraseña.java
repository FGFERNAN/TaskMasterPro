package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;


import static co.com.AutomatizacionTaskMasterPro.userInterface.RecuperaracionContraseña.TEXTO_CONFIRMACION;
import static jxl.biff.FormatRecord.logger;

public class ValidacionRecuperarContraseña implements Question<Boolean> {
    public static ValidacionRecuperarContraseña ValidacionRecuperarContraseña() {
        return new ValidacionRecuperarContraseña();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(TEXTO_CONFIRMACION).viewedBy(actor).asString();
            return "Le hemos enviado un e-mail para que pueda recuperar la contraseña".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
