<template>
  <div class="container-fluid">
    <!-- Encabezado -->
    <div class="row no-gutters header-custom">
      <div class="col-12 d-flex align-items-center justify-content-between p-3">
        <button class="btn btn-primary buton-regresar" @click="regresar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path
              d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <span class="button-text"> Regresar</span>
        </button>
        <h1 class="mb-0 text-center flex-grow-1">
          <i class="bi bi-chat-left-dots"></i> Agregar Comentarios
        </h1>
        <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
      </div>
    </div>

    <!-- Editor de texto -->
    <div class="container editor-container">
      <div class="btn-group btn-group-sm flex-wrap toolbar">
        <button><b>B</b></button>
        <button><i>I</i></button>
        <button><u>U</u></button>
        <button><s>S</s></button>
        <select>
          <option>style</option>
        </select>
        <button>≡</button>
        <button>↻</button>
        <button>🖼️</button>
        <button>😊</button>
      </div>

      <div class="editor-wrapper">
        <textarea v-model="comentario" class="editor" placeholder="Introducir texto..."></textarea>
        <button @click="enviarComentario" class="btn-comentar">Comentar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    document.title = "Agregar Comentarios | TaskMaster Pro";
  },
  data() {
    return {
      comentario: ''
    };
  },
  methods: {
    regresar() {
      this.$router.back();
    },
    enviarComentario() {
      if (!this.comentario.trim()) {
        alert("El comentario no puede estar vacío.");
        return;
      }

      const confirmacion = confirm("¿Está seguro de enviar el comentario?");
      if (confirmacion) {
        alert("Comentario enviado: " + this.comentario);
        this.comentario = '';
        this.$router.push('/interfaz-tarea'); // Ajusta esta ruta si es necesario
      } else {
        alert("Comentario no enviado.");
      }
    }
  }
};
</script>


<style scoped>
@import '@/assets/css/aggcomentarios.css';
</style>
