document.addEventListener('DOMContentLoaded', function() {
    // Objeto para almacenar los mensajes de cada usuario
    const messages = {};

    // Obtener elementos del DOM
    const messageList = document.querySelector('.message-list');
    const textarea = document.querySelector('textarea');
    const sendButton = document.querySelector('.send-button');
    const searchBar = document.querySelector('.search-bar');
    let selectedUser = '';

    // Lista de miembros inicial
    const members = [
        { name: 'Nikole Bernal', date: '12 Julio' },
        { name: 'Felipe Garcia', date: '12 Julio' },
        { name: 'Erika Triana', date: '12 Julio' },
        { name: 'Andres Garzon', date: '12 Julio' }
    ];

    // Función para mostrar los mensajes en la lista de mensajes
    function displayMessages(user) {
        messageList.innerHTML = ''; // Limpiar los mensajes existentes
        if (messages[user] && messages[user].length > 0) {
            messages[user].forEach(msg => {
                const msgElement = document.createElement('li');
                msgElement.classList.add('message-item');
                msgElement.textContent = `${user}: ${msg}`;
                const dateElement = document.createElement('span');
                dateElement.classList.add('date');
                dateElement.textContent = new Date().toLocaleDateString();
                msgElement.appendChild(dateElement);
                messageList.appendChild(msgElement);
            });
        } else {
            messageList.innerHTML = `<li class="message-item">No hay mensajes anteriores.</li>`;
        }
    }

    // Función para manejar la selección de un usuario
    function handleUserClick(event) {
        selectedUser = event.target.dataset.username;
        displayMessages(selectedUser);
        textarea.placeholder = `Escribiendo mensaje a ${selectedUser}...`;
    }

    // Función para actualizar la lista de miembros en la barra lateral
    function updateMemberList() {
        const filter = searchBar.value.toLowerCase();
        const filteredMembers = members.filter(member => {
            return member.name.toLowerCase().includes(filter);
        });

        messageList.innerHTML = ''; // Limpiar la lista de miembros
        filteredMembers.forEach(member => {
            const listItem = document.createElement('li');
            listItem.classList.add('message-item');
            listItem.dataset.username = member.name;
            listItem.innerHTML = `${member.name} <span class="date">${member.date}</span>`;
            listItem.addEventListener('click', handleUserClick);
            messageList.appendChild(listItem);
        });
    }

    // Función para filtrar la lista de miembros en función de la búsqueda
    function filterMembers() {
        updateMemberList();
    }

    // Añadir evento de clic al botón de enviar
    sendButton.addEventListener('click', function() {
        const messageText = textarea.value.trim();
        if (selectedUser && messageText) {
            if (!messages[selectedUser]) {
                messages[selectedUser] = [];
            }
            messages[selectedUser].push(messageText);
            displayMessages(selectedUser);
            textarea.value = '';
            textarea.placeholder = `Escribiendo mensaje a ${selectedUser}...`;
        } else {
            alert('Seleccione un usuario y escriba un mensaje antes de enviar.');
        }
    });

    // Añadir evento de entrada en la barra de búsqueda
    searchBar.addEventListener('input', filterMembers);

    // Inicializar la lista de miembros
    updateMemberList(); // Mostrar miembros iniciales
});
