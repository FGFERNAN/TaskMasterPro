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
        <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
      </div>
    </div>

    <!-- Contenido -->
    <div class="container-m mt-5">
      <div class="sidebar">
        <h3>📧 Mensajes Grupales</h3>
        <input type="text" placeholder="Buscar miembro" class="search-bar" v-model="busqueda" @input="filtrarMiembros" />
        <ul class="message-list">
          <li v-for="miembro in miembrosFiltrados" :key="miembro" class="message-item" @click="mostrarMensaje(miembro)">
            {{ miembro }} <span class="date">12 Julio</span>
          </li>
        </ul>
      </div>

      <div class="main-content">
        <h3>{{ miembroSeleccionado || 'Selecciona un mensaje' }}</h3>
        <p v-if="mensajes[miembroSeleccionado]">
          <span v-for="(msg, i) in mensajes[miembroSeleccionado]" :key="i" v-html="msg"></span>
        </p>
        <p v-else>El contenido del mensaje aparecerá aquí.</p>

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
          <div id="editor" class="form-control" style="height: 200px;"></div>
        </div>

        <button class="btn btn-primary send-button" @click="enviarMensaje">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default {
  data() {
    return {
      quill: null,
      miembros: ['Nikole Bernal', 'Felipe Garcia', 'Erika Triana', 'Andres Garzon'],
      busqueda: '',
      miembroSeleccionado: '',
      mensajes: {},
      miembrosFiltrados: [],
    };
  },
  mounted() {
    document.title = "Mensajes Grupales | TaskMaster Pro";
    this.miembrosFiltrados = this.miembros;
    this.quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: '#toolbar',
      },
    });

    // Mensaje inicial
    this.quill.root.innerHTML =
      'Buenos días compañeros.<p>Les comunico que el proyecto está un poco atrasado para que por favor adelanten lo más que puedan y así entregarlo en el día correspondiente.<p>Muchas gracias por la atención.';
  },
  methods: {
    regresar() {
      history.back();
    },
    mostrarMensaje(miembro) {
      this.miembroSeleccionado = miembro;
    },
    enviarMensaje() {
      const contenido = this.quill.root.innerHTML;
      if (contenido.trim() !== '') {
        this.miembros.forEach((miembro) => {
          if (!this.mensajes[miembro]) {
            this.mensajes[miembro] = [];
          }
          this.mensajes[miembro].push(contenido);
        });
        alert('Mensaje enviado a todos los miembros.');
        this.quill.root.innerHTML = '';
      }
    },
    filtrarMiembros() {
      const termino = this.busqueda.toLowerCase();
      this.miembrosFiltrados = this.miembros.filter((m) => m.toLowerCase().includes(termino));
    },
  },
};
</script>

<style scoped>


</style>
