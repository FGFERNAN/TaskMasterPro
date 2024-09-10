<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador</title>
    <link rel="stylesheet" href="styles.css">

    
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a href="#" class="logo nav-link">Logo</a>
            <button class="nav-toggle" aria-label="Abrir menú">
                <i class="fas fa-bards"></i>
            </button>
            <ul class="nav-menu">
                <li class="nav-menu-item">
                    <a href="#" class="nav-menu-link nav-link">Inicio</a>
                </li>
                <li class="nav-menu-item">
                    <a href="#" class="nav-menu-link nav-link">Inventarios</a>
                </li>
                <li class="nav-menu-item">
                    <a href="#" class="nav-menu-link nav-link">La Empresa</a>
                </li>
                <li class="nav-menu-item">
                    <a href="#" class="nav-menu-link nav-link">Contacto</a>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Responsive Navbar</h1>
    </main>
    <table>
        <th colspan="2">Bienvenido Administrador</th>
        <th><a href="index.html">Regresar</a></th>
        <tr>
            <th colspan="3">
                <h1>Listado de Usuarios</h1>
            </th>
        </tr>
        <tr>
            <th>Usuario</th>
            <th>Administrador</th>
            <th>Rol</th>
        </tr>

        <?php

        include('conexion.php');

        $sql = "SELECT * FROM login";
        $resultado = mysqli_query($conex, $sql);

        while ($mostrar = mysqli_fetch_array($resultado)) {
        ?>   
            <tr>
                <td><?php echo $mostrar['usuario']?></td>
                <td><?php echo $mostrar['password']?></td>
                <td><?php echo $mostrar['rol']?></td>
            </tr>
        <?php    
        }
        ?>
    </table>

    <script src="https://kit.fontawesome.com/7e5b2d153f.js" crossorigin="anonymous"></script>
    <script defer src="index.js"></script>
</body>
</html>