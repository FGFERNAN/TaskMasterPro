<?php 

include('conexion.php');

$user = $_POST['usuario'];
$password = $_POST['password'];
$rol = $_POST['rol'];


$queryusuario = mysqli_query($conex, "SELECT * FROM login WHERE usuario = '$user' and password = '$password' and rol = '$rol'");
$nr = mysqli_num_rows($queryusuario);

if($nr == 1) {
    if($rol=="Usuario"){
        header("Location: user.php");
    }
    else if($rol=="Administrador"){
        header("Location: admin.php");
    }
}else{
    echo "<script> alert('Usuario, contraseña o rol incorrecto.');window.location= 'index.html'</script>";
}

?>
