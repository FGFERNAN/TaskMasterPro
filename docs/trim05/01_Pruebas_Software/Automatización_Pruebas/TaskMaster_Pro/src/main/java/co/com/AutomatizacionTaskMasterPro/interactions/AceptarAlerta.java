package co.com.AutomatizacionTaskMasterPro.interactions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Interaction;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class AceptarAlerta implements Interaction {
    private final int tiempoEspera;

    public AceptarAlerta(int tiempoEspera) {
        this.tiempoEspera = tiempoEspera;
    }

    public static AceptarAlerta despuesDe(int segundos) {
        return new AceptarAlerta(segundos);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        WebDriver driver = BrowseTheWeb.as(actor).getDriver();
        try {
            WebDriverWait wait = new WebDriverWait(driver, tiempoEspera);
            Alert alert = wait.until(ExpectedConditions.alertIsPresent());
            alert.accept();
            System.out.println("Alerta aceptada correctamente.");
        } catch (TimeoutException e) {
            System.out.println("No se encontró ninguna alerta en el tiempo esperado.");
        }
    }
}
