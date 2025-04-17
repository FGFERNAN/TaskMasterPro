<template>
    <div class="bg-custom">
      <!-- Navbar for mobile -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Menú</a>
        </div>
      </nav>
  
      <!-- Offcanvas for mobile menu -->
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menú</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(link, index) in menuLinks" :key="index">
              <a class="nav-link mi-link" :href="link.href"><i :class="link.icon"></i> {{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="container-fluid">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-md-3 custom-col d-none d-lg-block">
            <img src="../assets/img/logos/logotipo.png" class="logo-inicio" width="300">
            <ul class="nav flex-column">
              <li class="nav-item" v-for="(link, index) in menuLinks" :key="index">
                <a class="nav-link mi-link" :href="link.href"><i :class="link.icon"></i> {{ link.name }}</a>
              </li>
              <li class="nav-item dropdown custom-dropdown">
                <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><i class="fa-solid fa-folder-minus me-1"></i> Proyectos</a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="d-flex align-items-center" id="sub-menu-proyectos">
                      <a class="dropdown-item align-items-center" href="interfazProyecto.html">
                        <i class="fa-regular fa-folder-open"></i> Veterinaria
                        <a href="editarProyecto.html" class="link-secondary ms-1 mi-link"><i class="fa-solid fa-edit"></i></a>
                        <a id="buton-eliminar" class="link-secondary ms-2 mi-link"><i class="fa-solid fa-trash me-3"></i></a>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link mi-link" href="etiquetas.html"><i class="fa-solid fa-tags me-1"></i> Etiquetas</a>
              </li>
            </ul>
          </div>
  
          <!-- Main content -->
          <div class="col custom-col-main">
            <header>
              <div class="header d-flex justify-content-end align-items-center p-3">
                <div class="d-flex align-items-center">
                  <a href="notificaciones.html" class="me-2">
                    <i class="fas fa-bell"></i>
                  </a>
                  <button class="btn btn-cerrar-sesion" @click="confirmarCerrarSesion"><i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión</button>
                  <a  class="btn btn-perfil"  @click="irPerfil"><i class="fa-solid fa-user me-1"></i> Perfil</a>
                </div>
              </div>
            </header>
            <section class="container-fluid mi-container position-relative">
              <div class="row align-items-center mb-3">
                <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 mb-2 mb-lg-0">
                  <h2>{{ projectName }}</h2>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 col-xxl-2 mb-2 mb-lg-0">
                  <button class="btn btn-secondary buton-miembros w-100" @click="navigateToMembers">
                    <i class="fa-regular fa-user me-1"></i> Miembros
                  </button>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 col-xxl-2 dropdown mb-2 mb-lg-0">
                  <button class="btn btn-secondary buton-mensaje dropdown-toggle w-100" type="button" id="dropdownMessage" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-regular fa-message me-1"></i> Mensaje
                  </button>
                  <ul class="dropdown-menu dropdown-menu-custom" aria-labelledby="dropdownMessage">
                    <li><a href="mensajesDirectos.html" class="dropdown-item"><i class="fa-solid fa-user me-1"></i> Directo</a></li>
                    <li><a href="mensajesGrupales.html" class="dropdown-item"><i class="fa-solid fa-users me-1"></i> Grupal</a></li>
                  </ul>
                </div>
                <div class="col-12 col-lg-12 col-xxl-4 mb-2 mb-lg-0">
                  <div class="progress w-100" role="progressbar" aria-label="Success example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-success" style="width: 80%">80%</div>
                  </div>
                </div>
                <div class="etiqueta position-absolute">
                  Etiqueta
                </div>
              </div>
              <hr style="height:5px; background-color:#000; margin-top:-10px;">
              <div class="d-flex justify-content-between mb-3">
                <button @click="navigateToCreateTask" class="btn btn-success"><i class="fa-solid fa-plus me-1"></i> Agregar Tarea</button>
              </div>
              <div class="accordion accordion-flush table-container" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Tareas Pendientes
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <input class="form-control custom-search-input mb-2" type="search" placeholder="Buscar en Tareas Pendientes" v-model="searchQuery" @keyup="filterPendingTasks">
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>Nombre Tarea</th>
                              <th>Fecha de Entrega</th>
                              <th>Proyecto</th>
                              <th>Responsable</th>
                              <th>Prioridad</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="task in filteredTasks" :key="task.id">
                              <td><a class="nav-link mi-link" :href="'interfazTarea.html'">{{ task.name }}</a></td>
                              <td>{{ task.dueDate }}</td>
                              <td>{{ task.project }}</td>
                              <td>{{ task.responsible }}</td>
                              <td>{{ task.priority }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
  
                <!-- Tareas En Curso -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Tareas En Curso
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <input class="form-control custom-search-input mb-2" v-model="searchInProgress" type="search" placeholder="Buscar en Tareas En Curso" @keyup="filterInProgressTasks">
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>Nombre Tarea</th>
                              <th>Fecha de Entrega</th>
                              <th>Proyecto</th>
                              <th>Responsable</th>
                              <th>Prioridad</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="task in filteredInProgressTasks" :key="task.id">
                              <td>{{ task.name }}</td>
                              <td>{{ task.dueDate }}</td>
                              <td>{{ task.project }}</td>
                              <td>{{ task.responsible }}</td>
                              <td>{{ task.priority }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
  
                <!-- Tareas Terminadas -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Tareas Terminadas
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <input class="form-control custom-search-input mb-2" v-model="searchCompleted" type="search" placeholder="Buscar en Tareas Terminadas" @keyup="filterCompletedTasks">
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>Nombre Tarea</th>
                              <th>Fecha de Entrega</th>
                              <th>Proyecto</th>
                              <th>Responsable</th>
                              <th>Prioridad</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="task in filteredCompletedTasks" :key="task.id">
                              <td>{{ task.name }}</td>
                              <td>{{ task.dueDate }}</td>
                              <td>{{ task.project }}</td>
                              <td>{{ task.responsible }}</td>
                              <td>{{ task.priority }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        projectName: 'Veterinaria',
        menuLinks: [
          { name: 'Crear Proyecto', href: 'creacionProyecto.html', icon: 'fa-solid fa-folder-plus' },
          { name: 'Utilizar Plantillas de Proyecto', href: 'plantillasProyecto.html', icon: 'fa-solid fa-folder-tree' },
          { name: 'Mis Tareas', href: 'misTareas.html', icon: 'fa-solid fa-list-check' },
          { name: 'Etiquetas', href: 'etiquetas.html', icon: 'fa-solid fa-tags' }
        ],
    searchQuery: '',
    searchInProgress: '',
    searchCompleted: '',
    tasks: [
      { id: 1, name: 'Tarea 1', dueDate: '17 de Agosto', project: 'Veterinaria', responsible: 'Andres Garzon', priority: 'Alta' },
      { id: 2, name: 'Tarea 2', dueDate: '20 Julio', project: 'Veterinaria', responsible: 'Johan Garcia', priority: 'Media' },
      { id: 3, name: 'Tarea 3', dueDate: '2 de Agosto', project: 'Veterinaria', responsible: 'Erika Daniela', priority: 'Baja' }
    ],
   
    
    filteredTasks: [],
    filteredInProgressTasks: [],
    filteredCompletedTasks: [],
      };
    },
    methods: {
  filterPendingTasks() {
    this.filteredTasks = this.tasks.filter(task =>
      task.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  },
  filterInProgressTasks() {
    this.filteredInProgressTasks = this.inProgressTasks.filter(task =>
      task.name.toLowerCase().includes(this.searchInProgress.toLowerCase())
    );
  },
  filterCompletedTasks() {
    this.filteredCompletedTasks = this.completedTasks.filter(task =>
      task.name.toLowerCase().includes(this.searchCompleted.toLowerCase())
    );
  },

  mounted() {
    this.filteredTasks = this.tasks;
  this.filteredInProgressTasks = this.inProgressTasks;
  this.filteredCompletedTasks = this.completedTasks;
},
      navigateToMembers() {
        // Redirigir a la página de miembros
        this.$router.push("/miembros-page");
    
      },

      irPerfil() {
      this.router.push("/perfil-completo");
    },
      navigateToCreateTask() {
        // Redirigir a la página de crear tarea
      },
      confirmarCerrarSesion() {
        if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
          this.$router.push("/iniciar-sesion");
        
        }
      }
    },
    mounted() {
      // Inicializa la lista de tareas filtradas
      this.filteredTasks = this.tasks;
    }
  };
  </script>
  
  <style scoped>

@import '@/assets/css/interfazProyecto.css';
</style>
  