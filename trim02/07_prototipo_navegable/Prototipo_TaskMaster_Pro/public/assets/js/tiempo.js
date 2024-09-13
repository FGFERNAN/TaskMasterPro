document.addEventListener('DOMContentLoaded', function () {
    // Flatpickr para las horas de inicio y fin (formato 12 horas)
    flatpickr("#time-start", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K", // Formato 12 horas
        time_24hr: false // Formato AM/PM
    });

    flatpickr("#time-end", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false
    });

    // Flatpickr para el calendario
    flatpickr("#static-date-picker", {
        inline: true,
        dateFormat: "d/m/Y", // Formato de fecha
        onChange: function (selectedDates) {
            const date = selectedDates[0] ? flatpickr.formatDate(selectedDates[0], "d/m/Y") : "";
            document.getElementById('static-date-picker').dataset.date = date;
        }
    });

    // Funcionalidad del botón "Registrar Tiempo"
    document.getElementById("btn-registrar").addEventListener("click", function () {
        const timeStart = document.getElementById("time-start").value;
        const timeEnd = document.getElementById("time-end").value;
        const selectedDate = document.getElementById('static-date-picker').dataset.date;

        if (timeStart && timeEnd && selectedDate) {
            alert(`Has registrado el tiempo:\nFecha: ${selectedDate}\nHora de Inicio: ${timeStart}\nHora de Fin: ${timeEnd}`);
        } else {
            alert("Por favor selecciona la hora de inicio, fin y la fecha.");
        }
    });
});