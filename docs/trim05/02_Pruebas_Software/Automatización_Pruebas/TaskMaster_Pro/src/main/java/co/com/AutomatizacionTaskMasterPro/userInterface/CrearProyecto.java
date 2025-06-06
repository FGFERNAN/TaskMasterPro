package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.screenplay.targets.Target;

public class CrearProyecto {

    public static Target INPUT_CREARPROYECTO = Target.the("Click Boton Crear Proyecto").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[1]/ul/li[1]"));
    public static Target INPUT_NOMBRE = Target.the("Ingresar el nombre").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[2]/div/div/input"));
    public static Target INPUT_DESCRIPCION = Target.the("Ingresar la descripcion").located(By.xpath("//*[@id=\"floatingTextarea\"]"));
    public static Target INPUT_FECHAINICIO = Target.the("Agregar una fecha para iniciar el proyecto").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[4]/div/input"));
    public static Target INPUT_FECHAFIN = Target.the("Agregar una fecha para finalizar el proyecto").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[5]/div/input"));
    public static Target BTN_ESTADO = Target.the("Selecionar en que estado estara el proyecto").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[6]/div/div/select"));
    public static Target BTN_ESTADO1 = Target.the("Selecionar en que estado estara el proyecto").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[6]/div/div/select/option[2]"));
    public static Target BTN_PRIORIDAD = Target.the("Selecionar la prioridad").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[7]/div/div/select"));
    public static Target BTN_PRIORIDAD1 = Target.the("Selecionar la prioridad").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[7]/div/div/select/option[3]"));
    public static Target BTN_GUARDAR = Target.the("Dar al boton guardar").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[9]/button"));
    public static Target CONFIRMACION_CREARP = Target.the("Confirmacion de la creacion del proyecto").locatedBy("//*[@id=\"app\"]/div/div[2]/div/div[2]/section/div/div[1]/div[3]/div[2]/label");
}