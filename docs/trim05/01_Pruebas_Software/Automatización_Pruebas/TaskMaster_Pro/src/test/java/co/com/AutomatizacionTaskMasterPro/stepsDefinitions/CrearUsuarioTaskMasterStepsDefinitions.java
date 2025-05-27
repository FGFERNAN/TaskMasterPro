package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import cucumber.api.DataTable;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class CrearUsuarioTaskMasterStepsDefinitions {
    @Cuando("^da click en el boton de crear usuario y ingrese todos los campos del formulario de creacion de usuario y hace click en el boton guardar$")
    public void daClickEnElBotonDeCrearUsuarioYIngreseTodosLosCamposDelFormularioDeCreacionDeUsuarioYHaceClickEnElBotonGuardar(DataTable arg1) {
    }

    @Entonces("^el sistema debe mostrar un mensaje de usuario creado con exito y redirige a la interfaz de administrar-usuarios$")
    public void elSistemaDebeMostrarUnMensajeDeUsuarioCreadoConExitoYRedirigeALaInterfazDeAdministrarUsuarios() {
    }
}
