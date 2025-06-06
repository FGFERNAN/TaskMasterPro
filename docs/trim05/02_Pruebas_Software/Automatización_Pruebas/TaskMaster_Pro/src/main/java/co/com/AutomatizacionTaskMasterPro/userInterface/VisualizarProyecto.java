package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class VisualizarProyecto extends PageObject {
        public static Target BTN_MPROYECTO = Target.the("Boton de desplegar menu de proyectos").located(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/ul/li[4]/a"));
        public static Target VIS_PROYECTOS = Target.the("Visualizar un proyecto").located(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/ul/li[4]/ul/li[1]/div/a"));
        public static final Target MENSAJE_EXITO = Target.the("Mensaje de éxito").located(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/section/div[1]/div[1]/h2"));
}
