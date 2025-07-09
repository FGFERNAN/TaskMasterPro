package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class RecuperaracionContraseña extends PageObject {
    public static Target INPUT_PASSWORD = Target.the("Ingrese la contraseña").located(By.id("password"));
    public static Target BTN_RECUPERARC = Target.the("Boton de recuperar contraseña").located(By.xpath("//*[@id=\"app\"]/div/div/div/form/div[3]/button[2]"));
    public static Target INPUT_EMAIL = Target.the("Ingrese su correo electronico").located(By.id("email"));
    public static Target BTN_RECUPERAR_CONTRASEÑA = Target.the("Boton de recuperar contraseña").located(By.xpath("//*[@id=\"app\"]/div/div/div/form/div[2]/button"));
    public static Target TEXTO_CONFIRMACION = Target.the("Texto de confirmacion de correo enviado").located(By.xpath("//*[@id=\"app\"]/div/div/div/form/div[1]/div/div/div"));


}
