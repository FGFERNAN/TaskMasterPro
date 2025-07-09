package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class EliminacionProyecto extends PageObject {
    public static Target BTN_MPROYECTOS = Target.the("Boton de desplegar menu de proyectos").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[1]/ul/li[4]/a"));
    public static Target BTN_ELIMINAR = Target.the("Boton de eliminar proyecto").located(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/ul/li[4]/ul/li[2]/div/span[2]/a"));
    public static Target TEXTO_PROYECTO = Target.the("Texto de proyecto eliminado").located(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/ul/li[4]/ul/li[2]/div/a"));

}
