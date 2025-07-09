<template>
  <div>
    <div class="container1">
      <button class="btn btn-primary me-md-2 mt-2 buton-regresar" @click="history.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path
            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
        Regresar
      </button>
      <div class="header1">
        <h2>
          Notificaciones
          <button type="button" class="btn btn-primary position-relative notification-count">
            <i class="fas fa-bell"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              4
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </h2>
        <div class="notifications">
          <img src="../../public/assets/img/logotipo.png" class="img-fluid mx-auto d-block logo" width="300" />
        </div>
      </div>
    </div>

    <div class="container">
      <div v-for="index in 8" :key="index">
        <div class="header">
          <span class="ms-2">Felipe García te envió un mensaje directo</span>
          <div></div>
          <div class="notifications">
            <div class="notification-item">🔔</div>
            <div></div>
          </div>
        </div>

        <div class="notification-item">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. [...] <!-- Texto completo original aquí -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificacionesComponent"
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
@import '../../public/assets/css/notificaciones.css';
</style>
