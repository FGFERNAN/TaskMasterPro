document.addEventListener('DOMContentLoaded', function() {
    const messages = {};
    const messageList = document.querySelector('.message-list');
    const searchBar = document.querySelector('.search-bar');
    let selectedUser = '';

    const quillEditor = new Quill('#editor', {
        theme: 'snow',
        modules: {
            toolbar: '#toolbar'
        },
        placeholder: 'Selecciona un usuario para comenzar a escribir...' // Placeholder predeterminado
    });
    const sendButton = document.querySelector('.send-button');

    const members = [
        { name: 'Nikole Bernal', date: '12 Julio' },
        { name: 'Felipe Garcia', date: '12 Julio' },
        { name: 'Erika Triana', date: '12 Julio' },
        { name: 'Andres Garzon', date: '12 Julio' }
    ];

    function displayMessages(user) {
        messageList.innerHTML = ''; // Limpiar los mensajes existentes
        if (messages[user] && messages[user].length > 0) {
            messages[user].forEach(msg => {
                const msgElement = document.createElement('li');
                msgElement.classList.add('message-item');
                
                // Crear un contenedor temporal para el HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = msg; // Asignar el mensaje HTML al div temporal
                const textContent = tempDiv.textContent || tempDiv.innerText || ""; // Extraer solo el texto, sin HTML
    
                msgElement.textContent = `${user}: ${textContent}`; // Usar texto limpio
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

    function handleUserClick(event) {
        selectedUser = event.target.dataset.username;
        displayMessages(selectedUser);
        // Actualizar el placeholder de Quill según el usuario seleccionado
        quillEditor.root.dataset.placeholder = `Escribiendo mensaje a ${selectedUser}...`;
        quillEditor.setText(''); // Limpiar el contenido del editor para mostrar el placeholder
    }

    function updateMemberList() {
        const filter = searchBar.value.toLowerCase();
        const filteredMembers = members.filter(member => member.name.toLowerCase().includes(filter));
        messageList.innerHTML = '';
        filteredMembers.forEach(member => {
            const listItem = document.createElement('li');
            listItem.classList.add('message-item');
            listItem.dataset.username = member.name;
            listItem.innerHTML = `${member.name} <span class="date">${member.date}</span>`;
            listItem.addEventListener('click', handleUserClick);
            messageList.appendChild(listItem);
        });
    }

    function filterMembers() {
        updateMemberList();
    }

    sendButton.addEventListener('click', function() {
        const messageText = quillEditor.root.innerHTML.trim();
        if (selectedUser && messageText) {
            if (!messages[selectedUser]) {
                messages[selectedUser] = [];
            }
            messages[selectedUser].push(messageText);
            displayMessages(selectedUser);
            quillEditor.setText('');
        } else {
            alert('Seleccione un usuario y escriba un mensaje antes de enviar.');
        }
    });

    searchBar.addEventListener('input', filterMembers);
    updateMemberList(); // Mostrar miembros iniciales
});
