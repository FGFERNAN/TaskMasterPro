package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class CreacionUsuario extends PageObject {
    public static Target BTN_PERFIL = Target.the("Boton de ir a perfil").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/header/div[1]/div/a[2]"));
    public static Target BTN_GUSUARIOS = Target.the("Boton de gestionar usuarios").located(By.xpath("//*[@id=\"app\"]/div/div/div/section/div[2]/div[1]/button[3]"));
    public static Target BTN_CUSUARIO = Target.the("Boton de crear usuario").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/section/div[1]/div[1]/button"));
    public static Target INPUT_NOMBRE = Target.the("Ingreso del nombre").located(By.id("nombreUsuario"));
    public static Target INPUT_APELLIDOS = Target.the("Ingreso de los apellidos").located(By.id("apellidoUsuario"));
    public static Target INPUT_EMAIL = Target.the("Ingreso del correo electronico").located(By.id("correoUsuario"));
    public static Target INPUT_PHONE = Target.the("Ingreso del numero de celular").located(By.id("numeroCelular"));
    public static Target INPUT_TDOCUMENTO = Target.the("Seleccione el tipo de documento").located(By.id("tipoDocumento"));
    public static Target INPUT_ID = Target.the("Ingresa el nunero de documento").located(By.id("numeroDocumento"));
    public static Target INPUT_PASSWORD = Target.the("Ingresa la contraseña").located(By.xpath("//*[@id=\"app\"]/div/div/form/div[8]/div/div/input"));
    public static Target INPUT_ROL = Target.the("Seleccione el rol").located(By.id("rol"));
    public static Target BTN_GUARDAR = Target.the("Boton de guardar").located(By.id("guardar"));
    public static Target ID_VALIDACION = Target.the("ID del usuario creado").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/section/div[2]/table/tbody/tr[1]/td[1]"));




}
