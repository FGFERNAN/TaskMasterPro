package co.com.AutomatizacionTaskMasterPro.runners.SuiteProjects;


import co.com.AutomatizacionTaskMasterPro.runners.*;
import co.com.AutomatizacionTaskMasterPro.tasks.EditarProyecto;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        AsignarProyectoTaskMasterRunner.class,
        EliminarMiembroTaskMasterRunner.class,
        FiltrarProyectoTaskMasterRunner.class,
        VisualizarProyectoTaskMasterRunner.class,
        CrearProyectoTaskMasterRunner.class,
        EditarProyectoTaskMasterRunner.class,
        EliminarProyectoTaskMasterRunner.class,
        CrearTareaTaskMasterRunner.class


})
public class SuiteProjects {
}
