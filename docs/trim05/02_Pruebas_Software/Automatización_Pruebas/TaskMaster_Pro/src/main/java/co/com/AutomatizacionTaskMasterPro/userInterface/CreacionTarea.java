package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class CreacionTarea extends PageObject {
    public static Target BTN_PROYECTO = Target.the("Boton de abrir un proyecto").located(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/section/div/div[1]/div[1]/div[2]/label"));
    public static Target BTN_CREAR_TAREA = Target.the("Boton de crear tarea").located(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/section/div[2]/button"));
    public static Target INPUT_NOMBRE = Target.the("Ingrese el nombre de la tarea").located(By.id("nombre"));
    public static Target INPUT_DESCRIPCION = Target.the("Ingrese la descripcion de la tarea").located(By.xpath("/html/body/div/div/div/div/form/div[3]/div/div/textarea"));
    public static Target INPUT_FECHAINICIO = Target.the("Seleccione la fecha de inicio de la tarea").located(By.xpath("/html/body/div/div/div/div/form/div[4]/div/input"));
    public static Target INPUT_FECHAFIN = Target.the("Seleccione la fecha de fin de la tarea").located(By.xpath("/html/body/div/div/div/div/form/div[5]/div/input"));
    public static Target SELECT_ESTADO = Target.the("Seleccione el estado de la tarea").located(By.xpath("/html/body/div/div/div/div/form/div[6]/div/div/select"));
    public static Target ESTADO1 = Target.the("Seleccione una opción del estado de la tarea").located(By.xpath("/html/body/div/div/div/div/form/div[6]/div/div/select/option[3]"));
    public static Target SELECT_PRIORIDAD = Target.the("Seleccione la prioridad de la tarea").located(By.xpath("/html/body/div/div/div/div/form/div[7]/div/div/select"));
    public static Target PRIORIDAD1 = Target.the("Seleccione una opción de la prioridad de la tarea").located(By.xpath("/html/body/div/div/div/div/form/div[7]/div/div/select/option[3]"));
    public static Target BTN_GUARDAR = Target.the("Botón de crear tarea").located(By.xpath("/html/body/div/div/div/div/form/div[8]/button"));
    public static Target BTN_ENCURSO = Target.the("Botón de desplegar tareas en curso").located(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/section/div[3]/div[2]/h2/button"));
    public static Target BTN_EDITAR(String nombre) {
        return Target.the("Boton de editar tarea").located(By.id(nombre));
    }
    public static Target VERIFICACION_NOMBRE = Target.the("Texto de confirmación del nombre de la tarea").located(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div/form/div[1]/div/input"));
    public static Target VERIFICACION_DESCRIPCION = Target.the("Texto de confirmación de la descripción de la tarea").located(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div/form/div[2]/input"));
    public static Target VERIFICACION_ESTADO = Target.the("Texto de confirmación del estado de la tarea").located(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div/form/div[5]/select/option[2]"));
    public static Target VERIFICACION_PRIORIDAD = Target.the("Texto de confirmación de la prioridad de la tarea").located(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div/form/div[6]/select/option[2]"));



}
