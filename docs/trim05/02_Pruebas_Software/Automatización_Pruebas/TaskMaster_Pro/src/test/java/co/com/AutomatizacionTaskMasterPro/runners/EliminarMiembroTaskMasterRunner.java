package co.com.AutomatizacionTaskMasterPro.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;


@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "src/test/resources/features/eliminarMiembro_taskmasterPro.feature",
        glue = {"co.com.AutomatizacionTaskMasterPro.stepsDefinitions", "co.com.AutomatizacionTaskMasterPro.utils.hooks"},
        snippets = SnippetType.CAMELCASE)

public class EliminarMiembroTaskMasterRunner {
}
