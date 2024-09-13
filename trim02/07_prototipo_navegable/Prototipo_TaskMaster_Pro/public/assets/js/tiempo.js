flatpickr("#time-start", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    time_24hr: false
});

flatpickr("#time-end", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    time_24hr: false
});

const datePicker = flatpickr("#date-picker", {
    dateFormat: "Y-m-d",
    static: true // Hace que el calendario no se mueva cuando se abre.
});

// Evento para mostrar/ocultar el calendario solo cuando se hace clic en el icono
document.getElementById('calendar-icon-title').addEventListener('click', () => {
    const datePickerInput = document.getElementById('date-picker');
    if (datePickerInput.style.display === 'none') {
        datePickerInput.style.display = 'block'; // Muestra el calendario
        datePicker.open(); // Abre el selector de Flatpickr
    } else {
        datePickerInput.style.display = 'none'; // Oculta el calendario si ya estaba visible
    }
});

document.getElementById('btn-registrar').addEventListener('click', () => {
    const startTime = document.getElementById('time-start').value;
    const endTime = document.getElementById('time-end').value;
    const selectedDate = document.getElementById('date-picker').value;

    if (!startTime || !endTime || !selectedDate) {
        alert('Por favor, selecciona la fecha y ambas horas antes de registrar el tiempo.');
        return;
    }

    alert(`Fecha: ${selectedDate}\nHora de Inicio: ${startTime}\nHora de Fin: ${endTime}`);
});