package co.com.AutomatizacionTaskMasterPro.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.screenplay.targets.Target;

public class FiltrarProyecto {

    public static Target BTN_LUPA = Target.the("").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/header/div[1]/div/div/i"));

    public static Target INPUT_NOMBREPROYECTO = Target.the("").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/section/div[1]/div/div/div[2]/input"));
    public static Target CAJA_TEXTO = Target.the("").located(By.xpath("//*[@id=\"app\"]/div/div[2]/div/div[2]/section/div[1]/div/div/div[2]/ul/a"));
    public static Target TEXTO_CONFIRMACION = Target.the("").located(By.xpath("//*[@id=\"7\"]/div[2]/div/div[2]/section/div[1]/div[1]/h2"));


}