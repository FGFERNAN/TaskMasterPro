package co.com.AutomatizacionTaskMasterPro.questions;

import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.CreacionUsuario.*;
import static jxl.biff.FormatRecord.logger;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class ValidacionCrearUsuario implements Question<Boolean> {
    public static ValidacionCrearUsuario ValidacionCrearUsuario() {
        return new ValidacionCrearUsuario();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        String userId = theActorInTheSpotlight().recall(SesionVariable.id.toString());
        logger.info("ID Sesion Variable: '" + userId + "'");

        String userName = theActorInTheSpotlight().recall(SesionVariable.nombre.toString());
        logger.info("Nombre Sesion Variable: '" + userName + "'");

        String userEmail = theActorInTheSpotlight().recall(SesionVariable.email.toString());
        logger.info("Email Sesion Variable: '" + userEmail + "'");

        String userRol = theActorInTheSpotlight().recall(SesionVariable.rol.toString());
        logger.info("Rol Sesion Variable: '" + userRol + "'");

        try {
            String id = Text.of(ID_VALIDACION(userId)).viewedBy(actor).asString().trim();
            logger.info("ID capturado: '" + id + "'");

            String nombre = Text.of(NOMBRE_VALIDACION(userName)).viewedBy(actor).asString().trim();
            logger.info("Nombre capturado: '" + nombre + "'");

            String email = Text.of(EMAIL_VALIDACION(userEmail)).viewedBy(actor).asString().trim();
            logger.info("Email capturado: '" + email + "'");

            String rol = Text.of(ROL_VALIDACION(userRol)).viewedBy(actor).asString().trim();
            logger.info("Rol capturado: '" + rol + "'");

            return id.equals(userId)
                    && nombre.equals(userName)
                    && email.equals(userEmail)
                    && rol.equals(userRol);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error" + e.getMessage());
            return false;
        }
    }
}
