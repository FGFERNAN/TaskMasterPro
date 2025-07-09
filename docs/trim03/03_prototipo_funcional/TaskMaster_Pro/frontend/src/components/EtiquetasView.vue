<template>
  <div class="container-fluid">
    <!-- Encabezado -->
    <div class="row no-gutters header-custom">
      <div class="col-12 d-flex align-items-center justify-content-between p-3">
        <button class="btn btn-primary buton-regresar" @click="regresar">
          <i class="bi bi-caret-left-fill"></i>
          <span class="button-text">Regresar</span>
        </button>
        <h1 class="mb-0 text-center flex-grow-1">
          <i class="fa-solid fa-tags me-1"></i> Etiquetas
        </h1>
        <img src="@/assets/img/logotipo.png" alt="Logo" class="img-fluid logo" />
      </div>
    </div>

    <!-- Formulario Crear -->
    <div class="container">
      <div class="row g-5">
        <div class="col-md-6">
          <form class="form-create-project">
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label input-nombre">Nombre:</label>
              <div class="col-sm-10 has-validation input-nombre">
                <div class="input-group mb-3">
                  <span class="input-group-text border-input">
                    <i class="fa-solid fa-tag"></i>
                  </span>
                  <input type="text" class="form-control border-input" placeholder="Name" maxlength="20" required />
                  <div class="invalid-feedback">
                    Por favor ingrese el nombre (máximo 20 caracteres).
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Color:</label>
              <div class="col-sm-10">
                <input type="color" class="form-control form-control-color border-input" v-model="colorNuevo" />
              </div>
            </div>
            <div class="d-grid gap-2 col-3 mx-auto">
              <button class="btn btn-primary buton-iniciar-sesion mb-4" type="button" @click="guardarEtiqueta">
                Guardar
              </button>
            </div>
          </form>
        </div>

        <!-- Formulario Editar -->
        <div class="col-md-6" v-show="mostrarEditar">
          <form class="form-create-project">
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label input-nombre">Nombre:</label>
              <div class="col-sm-10 input-nombre">
                <div class="input-group mb-3">
                  <span class="input-group-text border-input">
                    <i class="fa-solid fa-tag"></i>
                  </span>
                  <input type="text" class="form-control border-input" v-model="nombreEditar" maxlength="20" />
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Color:</label>
              <div class="col-sm-10">
                <input type="color" class="form-control form-control-color border-input" v-model="colorEditar" />
              </div>
            </div>
            <div class="d-grid gap-2 col-3 mx-auto">
              <button class="btn btn-primary buton-iniciar-sesion mb-4" type="button" @click="guardarEditarEtiqueta">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Etiquetas creadas -->
    <div class="container1 mt-5">
      <h3>Etiquetas Creadas</h3>
      <div v-if="etiquetaActiva" class="row align-items-center mt-4">
        <div class="col-auto">
          <input type="color" class="form-control form-control-color border-input" :value="etiquetaActiva.color" disabled />
        </div>
        <div class="col-auto">
          <input type="text" class="form-control border-input text-center" :value="etiquetaActiva.nombre" disabled />
        </div>
        <div class="col-auto">
          <button class="btn btn-primary mi-buton" data-bs-toggle="modal" data-bs-target="#modal-etiquetas">
            <i class="fa-solid fa-tag"></i>
          </button>
        </div>
        <div class="col-auto">
          <button class="btn btn-primary mi-buton" @click="mostrarEditar = true">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div class="col-auto">
          <button class="btn btn-primary mi-buton" @click="eliminarEtiqueta">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div v-else class="text-muted mt-3">
        No hay etiquetas creadas.
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modal-etiquetas" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-3">Lista de Proyectos</h1>
            <button class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="card" v-for="proyecto in proyectos" :key="proyecto">
              <div class="card-body mi-card">
                <h5 class="card-title">{{ proyecto }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  <button @click="asignarEtiqueta(proyecto)" class="buton-descargar text-body-secondary">
                    Asignar
                  </button>
                </h6>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary mi-buton" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorNuevo: "#6DA2C1",
      colorEditar: "#b30b00",
      nombreEditar: "Revisar",
      mostrarEditar: false,
      etiquetas: [{ nombre: "Revisar", color: "#b30b00" }],
      proyectos: ["Veterinaria", "Software", "Construcción"],
    };
  },
  computed: {
    etiquetaActiva() {
      return this.etiquetas.length > 0 ? this.etiquetas[0] : null;
    },
  },
  methods: {
    regresar() {
      history.back();
    },
    guardarEtiqueta() {
      alert("Etiqueta guardada exitosamente");
    },
    guardarEditarEtiqueta() {
      alert("Etiqueta editada");
    },
    eliminarEtiqueta() {
      if (this.etiquetas.length === 0) return;

      if (confirm("¿Estás seguro de que deseas eliminar esta etiqueta?")) {
        this.etiquetas.splice(0, 1);
        this.mostrarEditar = false;
      }
    },
    asignarEtiqueta(proyecto) {
      alert(`Etiqueta asignada a ${proyecto}`);
      this.$router.push("/interfazProyecto");
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/etiquetas.css";
/* Puedes agregar estilos adicionales aquí */
</style>
