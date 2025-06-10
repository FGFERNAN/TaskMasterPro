package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class EliminacionMiembro extends PageObject {

    public static Target BTN_PROYECTO = Target.the("Seleccionar Proyecto").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/section/div/div[1]/div[1]/div[2]/label"));

    public static Target BTN_MIEMBROS = Target.the("Boton de miembros").located(By.xpath("//button[contains(text(),'Miembros')]"));

    public static Target BTN_ELIMINAR = Target.the("Boton de eliminar").located(By.id("btn-1234567890"));

    public static Target MIEMBRO_ELIMINADO = Target.the("Texto de confirmacion de miembro eliminado").located(By.id("user-1234567890"));
}