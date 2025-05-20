package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class EliminarProyectoTaskMasterStepsDefinitions {
    @Dado("^que el usuario ha iniciado sesion y tiene el rol de admin o lider de proyecto$")
    public void queElUsuarioHaIniciadoSesionYTieneElRolDeAdminOLiderDeProyecto() {

    }

    @Dado("^existe al menos un proyecto creado para poder eliminarlo$")
    public void existeAlMenosUnProyectoCreadoParaPoderEliminarlo() {
    }

    @Cuando("^seleccione un proyecto de la lista$")
    public void seleccioneUnProyectoDeLaLista() {
    }

    @Cuando("^hace click en el boton de eliminar$")
    public void haceClickEnElBotonDeEliminar() {
    }

    @Cuando("^confirma la eliminacion del proyecto$")
    public void confirmaLaEliminacionDelProyecto() {
    }

    @Entonces("^el sistema muestra un mensaje de proyecto eliminado exitosamente$")
    public void elSistemaMuestraUnMensajeDeProyectoEliminadoExitosamente() {
    }

    @Entonces("^actualiza la lista de proyectos eliminando su registro$")
    public void actualizaLaListaDeProyectosEliminandoSuRegistro() {
    }
}
