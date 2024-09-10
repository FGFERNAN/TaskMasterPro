<?php
    $conex = new mysqli("localhost", "root", "", "ingreso");

    if($conex->connect_errno){

        echo "No hay conexión: (" . $conex->connect_errno .") " .$conex->connect_error;
    }


?>