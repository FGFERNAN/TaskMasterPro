package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class AsignacionMiembro extends PageObject {
    public static Target BTN_PROYECTO = Target.the("Seleccionar Proyecto").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/section/div/div[1]/div[1]/div[2]/label"));
    public static Target BTN_MIEMBROS = Target.the("Boton de miembros").located(By.xpath("//*[@id=\"7\"]/div[2]/div/div[2]/section/div[1]/div[2]/button"));
    public static Target BTN_AGREGAR = Target.the("Boton de agregar").located(By.xpath("//*[@id=\"7\"]/div[2]/div/div[2]/div/div[2]/ul/li[3]/a"));
    public static Target MIEMBRO_AGREGADO = Target.the("Texto de confirmacion de miembro agregado").located(By.id("user-1234567890"));
}
