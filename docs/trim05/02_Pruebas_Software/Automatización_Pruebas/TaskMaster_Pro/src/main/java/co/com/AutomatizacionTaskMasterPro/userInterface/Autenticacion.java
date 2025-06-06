package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class Autenticacion extends PageObject {
    public static Target INPUT_EMAIL = Target.the(" Ingreso del correo electronico").located(By.id("email"));
    public static Target INPUT_PASSWORD = Target.the("Ingreso del password").located(By.id("password"));
    public static Target BTN_INICIOSESION = Target.the("Click Boton inicio sesion").located(By.xpath("//*[@id=\"app\"]/div/div/div/form/div[3]/button[1]"));
    public static Target CONFIRMACION_LOGIN = Target.the("Interfaz Principal").locatedBy("//*[@id=\"app\"]/div/div[2]/div/div[2]/header/div[2]/h3/span");
}
