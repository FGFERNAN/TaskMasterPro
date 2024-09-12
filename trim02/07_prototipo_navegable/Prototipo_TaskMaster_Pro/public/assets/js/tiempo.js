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
    onChange: function (selectedDates, dateStr, instance) {}
});

document.getElementById('calendar-icon-title').addEventListener('click', () => {
    const datePickerInput = document.getElementById('date-picker');
    datePickerInput.style.display = datePickerInput.style.display === 'none' ? 'block' : 'none';
    datePicker.open();
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