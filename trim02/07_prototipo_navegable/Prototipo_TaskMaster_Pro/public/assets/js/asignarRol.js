// Función para buscar miembros
function buscarMiembros() {
    const searchInput = document.querySelector('input[placeholder="Buscar miembros"]');
    const memberCards = document.querySelectorAll('.member-card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        memberCards.forEach(card => {
            const memberName = card.querySelector('p').textContent.toLowerCase();
            if (memberName.includes(searchTerm)) {
                card.parentElement.style.display = '';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    });
};

//Funcion asignar Rol
function asignarRol(){
    const butonAsignar = document.querySelectorAll('#asignar');
    butonAsignar.forEach(buton =>{
        buton.addEventListener('click', (event) =>{
            const nombre = event.target.parentNode.textContent.trim();
            let resultado = confirm(`¿Deseas asignar el rol al usuario: ${nombre}`);
            if(resultado){
                alert(`Rol asignado exitosamente al usuario: ${nombre}`)
            }
        })
    })
}

// Inicializar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    buscarMiembros();
    asignarRol();
});