package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class ActualizacionProyecto extends PageObject {
    public static Target BTN_MENU_PROYECTOS = Target.the("Boton de desplegar menú de proyectos").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[1]/ul/li[4]/a"));
    public static Target BTN_EDITAR_PROYECTO = Target.the("Boton de editar un proyecto existente").located(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/ul/li[4]/ul/li[2]/div/span[1]/a"));
    public static Target INPUT_NOMBRE = Target.the("Ingrese el nombre nuevo").located(By.xpath("//*[@id=\"118\"]/form/div[2]/div/div/input"));
    public static Target INPUT_DESCRIPCION = Target.the("Ingrese la nueva descripcion").located(By.xpath("//*[@id=\"118\"]/form/div[3]/div/div/textarea"));
    public static Target INPUT_ESTADO = Target.the("Seleccione el nuevo estado").located(By.xpath("//*[@id=\"118\"]/form/div[6]/div/div/select"));
    public static Target INPUT_PRIORIDAD = Target.the("Seleccione la nueva prioridad").located(By.xpath("//*[@id=\"118\"]/form/div[7]/div/div/select"));
    public static Target INPUT_FECHAFIN = Target.the("Scroll de fecha").located(By.xpath("//*[@id=\"118\"]/form/div[5]/div/div/input"));
    public static Target BTN_GUARDAR = Target.the("Boton de guardar cambios").located(By.xpath("//*[@id=\"118\"]/form/div[9]/button"));



}
