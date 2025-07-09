package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class Autenticacion extends PageObject {
    public static Target INPUT_EMAIL = Target.the(" Ingreso del correo electronico").located(By.id("email"));
    public static Target INPUT_PASSWORD = Target.the("Ingreso del password").located(By.id("password"));
    public static Target BTN_INICIOSESION = Target.the("Click Boton inicio sesion").located(By.xpath("//*[@id=\"app\"]/div/div/div/form/div[3]/button[1]"));
    public static Target CONFIRMACION_LOGIN = Target.the("Email de confirmación").located(By.id("email"));
    public static Target BTN_PERFIL = Target.the("Boton de ir a perfil").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/header/div[1]/div/a[2]"));
    public static Target BTN_EDITAR_PERFIL = Target.the("Boton de ir a editar perfil").located(By.xpath("//*[@id=\"app\"]/div/div/div/section/div[2]/div[1]/button[1]"));


}
