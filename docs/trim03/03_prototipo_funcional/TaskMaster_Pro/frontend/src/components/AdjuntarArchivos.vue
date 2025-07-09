<template>
  <div class="container-fluid">
    <div class="row no-gutters header-custom">
      <div class="col-12 d-flex align-items-center justify-content-between p-3">
        <button class="btn btn-primary buton-regresar" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path
              d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <span class="button-text">Regresar</span>
        </button>
        <h1 class="mb-0 text-center flex-grow-1">
          <i class="fa-regular fa-file me-1"></i> Adjuntar Archivos
        </h1>
        <img src="../../public/assets/img/logotipo.png" alt="Logo" class="img-fluid logo" />
      </div>
    </div>

    <!-- Vista de archivos -->
    <div class="container mt-5">
      <div class="row mt-3">
        <div class="col-md-4" v-for="(img, index) in previews" :key="index">
          <div class="file-preview text-center">
            <img :src="img.src" :alt="img.alt" class="img-fluid" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="upload-area mt-4 text-center" id="upload-area" @click="triggerFileInput">
          <div class="upload-box">
            <input type="file" id="fileInput" class="d-none" multiple ref="fileInput">
            <span class="plus-icon"><i class="fa-solid fa-square-plus"></i></span>
            <h3>Arrastre o Adjunte Archivos</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdjuntarArchivos',
  data() {
    return {
      previews: [
        { src: '../../public/assets/img/pdf.png', alt: 'Archivo 1' },
        { src: '../../public/assets/img/png.png', alt: 'Archivo 2' },
        { src: '../../public/assets/img/word.png', alt: 'Archivo 3' },
      ]
    }
  },
  methods: {
    goBack() {
      history.back()
    },
    triggerFileInput() {
      this.$refs.fileInput.click()
    }
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
@import '../../public/assets/css/adjuntarArchivos.css';
</style>