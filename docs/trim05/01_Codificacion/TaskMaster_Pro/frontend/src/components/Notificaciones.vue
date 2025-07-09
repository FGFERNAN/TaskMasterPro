<template>
  <div>
    <div class="container-n">
      <button class="btn btn-primary me-md-2 mt-2 buton-regresar-n" @click="goBack">
        <i class="bi bi-caret-left-fill"></i>
        Regresar
      </button>
      <div class="header1">
        <h2 class="h2-n">Notificaciones <button type="button"
            class="btn btn-primary position-relative notification-count"><i class="fas fa-bell"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              4
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </h2>
        <div class="notifications">
          <img src="../assets/img/logotipo.png" class="img-fluid mx-auto d-block logo-n" width="300" />
        </div>
      </div>
    </div>

    <div class="container-n">
      <div v-for="index in 8" :key="index">
        <div class="header-n">
          <span class="ms-2 span-n">Felipe García te envió un mensaje directo</span>
          <div></div>
          <div class="notifications">
            <div class="notification-item">🔔</div>
            <div></div>
          </div>
        </div>

        <div class="notification-item">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam pariatur corporis quam deserunt autem repellat dolores architecto quod iusto sit inventore, odit consequuntur aliquid totam molestias, incidunt nisi amet fugiat.
            Possimus ipsum ratione autem sunt suscipit perspiciatis praesentium iusto labore porro voluptates, repellat excepturi ea impedit culpa architecto cum adipisci, fugiat laborum eos animi pariatur. Ipsa ratione voluptatem reiciendis sed!
            Ducimus esse at sint velit, reiciendis eos aliquid necessitatibus corrupti nam laudantium sequi odit quo numquam placeat quia aut itaque! Temporibus, ut expedita! Quae molestiae sint officiis quos. Aut, mollitia.
            Blanditiis dolorem sunt numquam magnam excepturi eaque laborum aliquam, ratione rem libero. Sed aut nesciunt repellat modi laboriosam veritatis, necessitatibus nulla corporis dolor obcaecati illo consequatur exercitationem architecto eius accusamus.
            Illum consequatur perspiciatis tempora fuga laudantium vero at neque quo tempore porro quidem, nulla quaerat. Dolor tempora quia atque ut numquam nam illum dolorum! Sunt libero ullam eius cumque minima.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "Notificaciones | TaskMaster Pro";
  },
  name: "NotificacionesComponent",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>

<style scoped>
@import "@/../../assets/css/notificaciones.css";
</style>
