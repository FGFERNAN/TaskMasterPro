package co.com.AutomatizacionTaskMasterPro.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.questions.Attribute;
import net.serenitybdd.screenplay.questions.Text;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.NoSuchElementException;

import static co.com.AutomatizacionTaskMasterPro.userInterface.EliminacionMiembro.MIEMBRO_ELIMINADO;
import static co.com.AutomatizacionTaskMasterPro.userInterface.EliminacionProyecto.TEXTO_PROYECTO;
import static jxl.biff.FormatRecord.logger;

public class ValidacionEliminarMiembro implements Question<Boolean> {
    public static ValidacionEliminarMiembro ValidacionEliminarMiembro() {
        return new ValidacionEliminarMiembro();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            // Intenta obtener el texto del elemento. Si está visible, no fue eliminado.
            String texto = Text.of(MIEMBRO_ELIMINADO).viewedBy(actor).asString().trim();
            logger.warn("Texto capturado: '" + texto + "'");
            return false;

        } catch (NoSuchElementException | ElementNotVisibleException e) {
            // Si lanza excepción, asumimos que el elemento fue eliminado correctamente.
            logger.info("Validación exitosa: El miembro Nikole   Bernal  fue eliminado y ya no aparece en la lista.");
            return true;
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}