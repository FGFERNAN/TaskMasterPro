package co.com.AutomatizacionTaskMasterPro.questions;

import co.com.AutomatizacionTaskMasterPro.utils.hooks.SesionVariable;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Attribute;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionTaskMasterPro.userInterface.Autenticacion.*;
import static jxl.biff.FormatRecord.logger;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class ValidacionLogin implements Question<Boolean> {
    public static ValidacionLogin validacionLogin() {
        return new ValidacionLogin();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        String correo = theActorInTheSpotlight().recall(SesionVariable.correo.toString());
        logger.info("Correo Sesion Variable: '" + correo + "'");
        try {
            String email = Attribute.of(CONFIRMACION_LOGIN).named("value").viewedBy(actor).asString();
            logger.info("Correo capturado: '" + email + "'");
            return email.equals(correo);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
