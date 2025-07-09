package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class ActualizacionProyecto extends PageObject {
    public static Target BTN_MENU_PROYECTOS = Target.the("Boton de desplegar menú de proyectos").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[1]/ul/li[4]/a"));
    public static Target BTN_EDITAR_PROYECTO = Target.the("Boton de editar un proyecto existente").located(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/ul/li[4]/ul/li/div/span[1]/a"));
    public static Target INPUT_NOMBRE = Target.the("Ingrese el nombre nuevo").located(By.xpath("/html/body/div/div/div/form/div[2]/div/div/input"));
    public static Target INPUT_DESCRIPCION = Target.the("Ingrese la nueva descripcion").located(By.xpath("/html/body/div/div/div/form/div[3]/div/div/textarea"));
    public static Target INPUT_ESTADO = Target.the("Seleccione el nuevo estado").located(By.xpath("/html/body/div/div/div/form/div[6]/div/div/select"));
    public static Target INPUT_PRIORIDAD = Target.the("Seleccione la nueva prioridad").located(By.xpath("/html/body/div/div/div/form/div[7]/div/div/select"));
    public static Target INPUT_FECHAFIN = Target.the("Scroll de fecha").located(By.xpath("/html/body/div/div/div/form/div[5]/div/div/input"));
    public static Target BTN_GUARDAR = Target.the("Boton de guardar cambios").located(By.xpath("/html/body/div/div/div/form/div[9]/button"));
    public static Target CONFIRMACION_NOMBRE = Target.the("Texto de confirmacion del nombre actualizado").located(By.xpath("/html/body/div/div/div/form/div[2]/div/div/input"));
    public static Target CONFIRMACION_DESCRIPCION = Target.the("Texto de confirmacion de la descripción actualizada").located(By.xpath("/html/body/div/div/div/form/div[3]/div/div/textarea"));
    public static Target CONFIRMACION_ESTADO = Target.the("Texto de confirmacion del estado actualizado").located(By.xpath("/html/body/div/div/div/form/div[6]/div/div/select/option[3]"));
    public static Target CONFIRMACION_PRIORIDAD = Target.the("Texto de confirmacion de la prioridad actualizada").located(By.xpath("/html/body/div/div/div/form/div[7]/div/div/select/option[2]"));
    public static Target BTN_REGRESAR = Target.the("Boton de regresar").located(By.xpath("//*[@id=\"app\"]/div/div/div/div/button"));
    public static Target BTN_REGRESAR2 = Target.the("Boton de regresar 2").located(By.xpath("//*[@id=\"app\"]/div/header/div/div[3]/div/button[1]"));








}
