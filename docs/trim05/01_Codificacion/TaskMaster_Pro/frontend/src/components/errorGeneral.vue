<template>
    <div class="lottie-container">
      <div ref="lottieElement"></div>
    </div>
  </template>
  
  <script>
  import lottie from "lottie-web";
  import animationData from "@/assets/lottie/error500.json"; // Importar el JSON
  
  export default {
    mounted() {
      lottie.loadAnimation({
        container: this.$refs.lottieElement, // Contenedor donde se mostrará la animación
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    },
  };
  </script>
  
  <style scoped>
  .lottie-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.8);
    height: 100vh; /* Centrar la animación verticalmente */
  }
  </style>
  