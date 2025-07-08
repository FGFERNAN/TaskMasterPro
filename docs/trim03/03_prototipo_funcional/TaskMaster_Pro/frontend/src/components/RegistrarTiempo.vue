<template>
  <div class="container-fluid bg-custom">
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
          <i class="fa-solid fa-clock me-2"></i> Registrar Tiempo
        </h1>
        <img src="@/assets/img/logotipo.png" alt="Logo" class="img-fluid logo" />
      </div>
    </div>

    <div class="row margin-top">
      <div class="col-lg-5">
        <div class="center-container">
          <h2>Selecciona tu Hora y Fecha</h2>
          <div id="static-date-picker"></div>

          <div class="d-flex align-items-center w-100 mt-3">
            <input type="text" id="time-start" class="time-picker-input" placeholder="Seleccionar Hora de Inicio" readonly />
          </div>

          <div class="d-flex align-items-center w-100 mt-3">
            <input type="text" id="time-end" class="time-picker-input" placeholder="Seleccionar Hora de Fin" readonly />
          </div>

          <button class="btn btn-registrar mt-3" id="btn-registrar">Registrar Tiempo</button>
        </div>
      </div>

      <div class="col-lg-7">
        <div class="ratio ratio-4x3">
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/b11a073d-f6fe-4613-83d7-729cc7b25539/page/gQrBE"
            frameborder="0"
            allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import flatpickr from 'flatpickr'

const horaInicio = ref('')
const horaFin = ref('')
const fechaSeleccionada = ref(null)

onMounted(() => {
  flatpickr("#time-start", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    time_24hr: false,
    onChange: (_, dateStr) => {
      horaInicio.value = dateStr
    }
  })

  flatpickr("#time-end", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    time_24hr: false,
    onChange: (_, dateStr) => {
      horaFin.value = dateStr
    }
  })

  flatpickr("#static-date-picker", {
    inline: true,
    dateFormat: "d/m/Y",
    onChange: (selectedDates) => {
      fechaSeleccionada.value = selectedDates[0]
    }
  })

  const btn = document.getElementById("btn-registrar")
  if (btn) {
    btn.addEventListener("click", () => {
      if (horaInicio.value && horaFin.value && fechaSeleccionada.value) {
        const fechaFormateada = flatpickr.formatDate(fechaSeleccionada.value, "d/m/Y")
        alert(`Has registrado el tiempo:\n📅 Fecha: ${fechaFormateada}\n🕐 Inicio: ${horaInicio.value}\n🕕 Fin: ${horaFin.value}`)
      } else {
        alert("Por favor selecciona la hora de inicio, fin y la fecha.")
      }
    })
  }
})

function goBack() {
  window.history.back()
}
</script>


<style scoped>


@import "@/assets/css/registrarTiempo.css";
</style>
