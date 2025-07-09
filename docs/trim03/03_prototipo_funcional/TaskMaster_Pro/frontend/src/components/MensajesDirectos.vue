<template>
  <div class="container-fluid">
    <!-- Encabezado -->
    <div class="row no-gutters header-custom">
      <div class="col-12 d-flex align-items-center justify-content-between p-3">
        <button class="btn btn-primary buton-regresar" @click="regresar">
          <i class="bi bi-caret-left-fill"></i>
          <span class="button-text">Regresar</span>
        </button>
          <img src="../assets/img/logos/logotipo.png" alt="Logo" class="img-fluid logo" />
      </div>
    </div>

    <div class="container mt-5">
      <div class="sidebar">
        <h2>📧 Mensajes Directos</h2>
        <input type="text" placeholder="Buscar mensaje" class="search-bar" v-model="busqueda" />
        <ul class="message-list">
          <li class="message-item" v-for="(msg, index) in mensajesFiltrados" :key="index">
            {{ msg.nombre }} <span class="date">{{ msg.fecha }}</span>
          </li>
        </ul>
      </div>

      <div class="main-content">
        <h3>Selecciona un mensaje</h3>
        <p>El contenido del mensaje aparecerá aquí.</p>

        <div id="editor-container">
          <div id="toolbar">
            <button class="ql-bold btn btn-light"><b>B</b></button>
            <button class="ql-italic btn btn-light"><i>I</i></button>
            <button class="ql-underline btn btn-light"><u>U</u></button>
            <button class="ql-strike btn btn-light"><s>S</s></button>
            <button class="ql-blockquote btn btn-light">""</button>
            <button class="ql-link btn btn-light"><i class="bi bi-link"></i></button>
            <button class="ql-image btn btn-light"><i class="bi bi-card-image"></i></button>
            <button class="ql-code-block btn btn-light"><i class="bi bi-file-earmark-code"></i></button>
          </div>
          <div id="editor" class="form-control"></div>
        </div>

        <button class="btn btn-primary send-button" @click="enviarMensaje">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import Quill from 'quill';

const router = useRouter();
const busqueda = ref('');
const editor = ref(null);

const mensajes = ref([
  { nombre: 'Nikole Bernal', fecha: '12 Julio' },
  { nombre: 'Felipe Garcia', fecha: '12 Julio' },
  { nombre: 'Erika Triana', fecha: '12 Julio' },
  { nombre: 'Andres Garzon', fecha: '12 Julio' },
]);

const mensajesFiltrados = computed(() =>
  mensajes.value.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
  )
);

const regresar = () => {
  router.back();
};

const enviarMensaje = () => {
  const contenido = editor.value.root.innerHTML;
  alert('Mensaje enviado:\n\n' + contenido);
  // Aquí puedes enviar el contenido al backend si lo deseas
  editor.value.setContents([]); // Limpia el contenido
};

onMounted(() => {
  editor.value = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: '#toolbar',
    },
  });
});
</script>

<style scoped>



</style>
