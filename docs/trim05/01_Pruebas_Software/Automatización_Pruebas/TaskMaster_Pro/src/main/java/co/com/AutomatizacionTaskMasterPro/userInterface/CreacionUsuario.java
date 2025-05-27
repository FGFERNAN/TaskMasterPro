package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class CreacionUsuario extends PageObject {
    public static Target BTN_PERFIL = Target.the("Boton de ir a perfil").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/header/div[1]/div/a[2]"));
    public static Target BTN_GUSUARIOS = Target.the("Boton de gestionar usuarios").located(By.xpath("//*[@id=\"app\"]/div/div/div/section/div[2]/div[1]/button[3]"));
    public static Target BTN_CUSUARIO = Target.the("Boton de crear usuario").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/section/div[1]/div[1]/button"));
    public static Target INPUT_NOMBRE = Target.the("Ingreso del nombre").located(By.id("nombreUsuario"));

}
