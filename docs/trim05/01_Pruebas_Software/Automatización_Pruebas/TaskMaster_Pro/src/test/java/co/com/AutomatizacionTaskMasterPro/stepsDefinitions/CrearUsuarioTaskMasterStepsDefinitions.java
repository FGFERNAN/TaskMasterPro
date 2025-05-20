package co.com.AutomatizacionTaskMasterPro.stepsDefinitions;

import co.com.AutomatizacionTaskMasterPro.tasks.AbrirPagina;
import cucumber.api.DataTable;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class CrearUsuarioTaskMasterStepsDefinitions {
    @Dado("^que el usuario ha iniciado sesion y tiene permisos de administrador o lider de proyecto$")
    public void queElUsuarioHaIniciadoSesionYTienePermisosDeAdministradorOLiderDeProyecto() {
    }

    @Dado("^existen roles creados en el sistema para asignar al nuevo usuario$")
    public void existenRolesCreadosEnElSistemaParaAsignarAlNuevoUsuario() {
    }

    @Dado("^ha dado click en el boton de crear usuario$")
    public void haDadoClickEnElBotonDeCrearUsuario() {
        theActorInTheSpotlight().wasAbleTo(AbrirPagina.crearUsuario());
    }

    @Cuando("^ingrese todos los campos del formulario de creacion de usuario$")
    public void ingreseTodosLosCamposDelFormularioDeCreacionDeUsuario() {
    }

    @Cuando("^hace click en el boton guardar$")
    public void haceClickEnElBotonGuardar(DataTable arg1) {
    }

    @Entonces("^el sistema debe mostrar un mensaje de usuario creado con exito$")
    public void elSistemaDebeMostrarUnMensajeDeUsuarioCreadoConExito() {
    }

    @Entonces("^redirige a la interfaz de administrar-usuarios$")
    public void redirigeALaInterfazDeAdministrarUsuarios() {
    }
}
