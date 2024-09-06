
    // Inicializa el calendario de Flatpickr
    let selectedDate = ""; // Variable para almacenar la fecha seleccionada
    flatpickr("#calendar", {
        inline: true,
        dateFormat: "d-m-Y",
        onChange: function(selectedDates, dateStr, instance) {
            selectedDate = dateStr; // Actualiza la fecha seleccionada
        }
    });

    // Guarda la hora seleccionada en el reloj
    document.getElementById('saveTimeBtn').addEventListener('click', function () {
        const hour = document.getElementById('hourInput').value.padStart(2, '0');
        const minute = document.getElementById('minuteInput').value.padStart(2, '0');
        const second = document.getElementById('secondInput').value.padStart(2, '0');
        const amPm = document.querySelector('input[name="amPmRadios"]:checked').value;

        document.getElementById('clock').textContent = `${hour}:${minute}:${second} ${amPm}`;
    });

    // Mostrar un alert con la fecha y hora seleccionadas cuando se haga clic en "Registrar tiempo"
    document.getElementById('theme-btn').addEventListener('click', function() {
        const selectedTime = document.getElementById('clock').textContent;
        
        if (selectedDate) {
            alert(`Fecha seleccionada: ${selectedDate}\nHora seleccionada: ${selectedTime}`);
        } else {
            alert('Por favor selecciona una fecha.');
        }
    });