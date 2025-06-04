package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.CreacionUsuario.*;
import static jxl.biff.FormatRecord.logger;

public class ValidacionCrearUsuario implements Question<Boolean> {
    public static ValidacionCrearUsuario ValidacionCrearUsuario() {
        return new ValidacionCrearUsuario();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String id = Text.of(ID_VALIDACION).viewedBy(actor).asString().trim();
            logger.info("ID capturado: '" + id + "'");

            String nombre = Text.of(NOMBRE_VALIDACION).viewedBy(actor).asString().trim();
            logger.info("Nombre capturado: '" + nombre + "'");

            String email = Text.of(EMAIL_VALIDACION).viewedBy(actor).asString().trim();
            logger.info("Email capturado: '" + email + "'");

            String rol = Text.of(ROL_VALIDACION).viewedBy(actor).asString().trim();
            logger.info("Rol capturado: '" + rol + "'");

            return id.equals("1030523678")
                    && nombre.equals("Enrique Garcia")
                    && email.equals("enrique@gmail.com")
                    && rol.equals("Lider de Proyecto");
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
