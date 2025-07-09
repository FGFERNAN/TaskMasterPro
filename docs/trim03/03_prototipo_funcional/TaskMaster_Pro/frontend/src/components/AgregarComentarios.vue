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
          <i class="bi bi-chat-left-dots"></i> Agregar Comentarios
        </h1>
        <img src="../assets/img/logotipo.png" alt="Logo" class="img-fluid logo" />
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
        <textarea
          v-model="comentario"
          class="editor"
          placeholder="Introducir texto..."
        ></textarea>
        <button @click="enviarComentario" class="btn-comentar">Comentar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const comentario = ref('');
const router = useRouter();

const regresar = () => {
  router.back();
};

const enviarComentario = () => {
  if (!comentario.value.trim()) {
    alert("El comentario no puede estar vacío.");
    return;
  }

  const confirmacion = confirm("¿Está seguro de enviar el comentario?");
  if (confirmacion) {
    alert("Comentario enviado: " + comentario.value);
    comentario.value = '';
    router.push('/interfaz-tarea'); // Ajusta esta ruta si es necesario
  } else {
    alert("Comentario no enviado.");
  }
};
</script>

<style scoped>
@import '@/assets/css/aggcomentarios.css';
</style>

