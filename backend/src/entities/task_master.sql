-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-02-2025 a las 18:51:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `task_master`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarPermisos` (IN `rolId` INT, IN `modulo` VARCHAR(255), IN `accion` VARCHAR(255))   BEGIN
	SELECT permisos.id FROM permisos
	JOIN modulos ON permisos.moduloID = modulos.id
	JOIN acciones ON permisos.accionesID = acciones.id
	WHERE permisos.rolID = rolId AND modulos.nombre = modulo AND acciones.nombre = accion;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUser` (IN `id` INT, IN `nombre` VARCHAR(100), IN `apellidos` VARCHAR(155), IN `email` VARCHAR(200), IN `telefono` VARCHAR(20), IN `password` VARCHAR(256), IN `rolID` INT, IN `tipo_documento` INT)   BEGIN
	INSERT INTO usuarios (id, nombre, apellidos, email, telefono, password, rolID, tipo_documento) VALUES(id,nombre,apellidos,email,telefono,password,rolID,tipo_documento);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acciones`
--

CREATE TABLE `acciones` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `acciones`
--

INSERT INTO `acciones` (`id`, `nombre`) VALUES
(1, 'Crear Rol'),
(2, 'Asignar Rol'),
(3, 'Actualizar Rol'),
(4, 'Eliminar Rol'),
(5, 'Consultar Roles'),
(6, 'Crear Usuario'),
(7, 'Consultar Usuarios'),
(8, 'Consultar Usuario ID'),
(9, 'Actualizar Usuario'),
(10, 'Eliminar Usuario'),
(11, 'Consultar Rol ID'),
(12, 'Crear Modulo'),
(13, 'Consultar Modulos'),
(14, 'Consultar Modulo ID'),
(15, 'Actualizar Modulo'),
(16, 'Eliminar Modulo'),
(17, 'Editar Perfil'),
(18, 'Cancelar Cuenta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `tamaño` bigint(20) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `tareaID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campos_personalizados`
--

CREATE TABLE `campos_personalizados` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `valor` varchar(255) DEFAULT NULL,
  `proyectosID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `tareaID` int(10) UNSIGNED NOT NULL,
  `usuarioID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas`
--

CREATE TABLE `etiquetas` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `color` char(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `getallusers`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `getallusers` (
`id` int(10) unsigned
,`nombre` varchar(100)
,`apellidos` varchar(155)
,`email` varchar(200)
,`telefono` varchar(20)
,`password` varchar(256)
,`rol` varchar(155)
,`tipo_documento` varchar(50)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `usuarioID` int(10) UNSIGNED DEFAULT NULL,
  `proyectosID` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulos`
--

CREATE TABLE `modulos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `modulos`
--

INSERT INTO `modulos` (`id`, `nombre`) VALUES
(1, 'Modulo Usuarios'),
(2, 'Modulo Gestion Proyecto'),
(3, 'Modulo Gestion Tareas'),
(4, 'Modulo Personalizacion'),
(5, 'Modulo Colaboracion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(10) UNSIGNED NOT NULL,
  `rolID` int(10) UNSIGNED NOT NULL,
  `moduloID` int(10) UNSIGNED NOT NULL,
  `accionesID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `rolID`, `moduloID`, `accionesID`) VALUES
(1, 1, 1, 1),
(2, 1, 1, 2),
(3, 1, 1, 3),
(4, 1, 1, 4),
(5, 1, 1, 5),
(6, 1, 1, 11),
(7, 1, 1, 6),
(8, 1, 1, 7),
(9, 1, 1, 8),
(10, 1, 1, 9),
(11, 1, 1, 10),
(12, 2, 1, 6),
(13, 2, 1, 7),
(14, 2, 1, 8),
(15, 2, 1, 9),
(16, 2, 1, 10),
(17, 3, 1, 7),
(18, 4, 1, 7),
(19, 1, 1, 12),
(20, 1, 1, 13),
(21, 1, 1, 14),
(22, 1, 1, 15),
(23, 1, 1, 16),
(24, 1, 1, 17),
(25, 2, 1, 17),
(26, 3, 1, 17),
(27, 4, 1, 17),
(28, 1, 1, 18),
(29, 2, 1, 18),
(30, 3, 1, 18),
(31, 4, 1, 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `prioridad` varchar(50) DEFAULT NULL,
  `etiquetasID` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros_tiempo`
--

CREATE TABLE `registros_tiempo` (
  `id` int(10) UNSIGNED NOT NULL,
  `fecha` date DEFAULT NULL,
  `horaInicial` time DEFAULT NULL,
  `horaFinal` time DEFAULT NULL,
  `tiempo` time DEFAULT NULL,
  `tareaID` int(10) UNSIGNED NOT NULL,
  `usuarioID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(155) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Administrador ', 'Administrador, un rol diseñado para tener acceso a todas las funcionalidades del sistema.'),
(2, 'Lider de Proyecto', 'Lider de proyecto del sistema que como su nombre indica, es el responsable de crear proyectos, asiganarlos, eliminarlos y demas acciones que solo deberia\nrealizar un lider de proyecto para mayor orden en la gestion del mismo.'),
(3, 'Miembro de Proyecto', 'Miembro de proyecto, es el rol, que puede solo editar proyectos, tareas, subir archivos, enviar mensajes y entre otras acciones que delimitan sus permisos de los del lider.'),
(4, 'StakeHolder/cliente', 'StakeHolder/Cliente, un rol creado para como su nombre indica los clientes o personas interesadas en los proyectos que se realizan en el software, que contaran especialmente con permisos de visualización.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `prioridad` varchar(50) DEFAULT NULL,
  `usuarioID` int(10) UNSIGNED NOT NULL,
  `proyectoID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`id`, `nombre`) VALUES
(1, 'Tarjeta de Identidad'),
(2, 'Cedula de Ciudadania'),
(3, 'Cedula de Extranjeria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(155) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `rolID` int(10) UNSIGNED NOT NULL,
  `tipo_documento` tinyint(3) UNSIGNED NOT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `email`, `telefono`, `password`, `rolID`, `tipo_documento`, `imagen`) VALUES
(198765432, 'Andrés', 'Garzon', 'andres@gmail.com', '3207847574', '$2b$10$U5.fiIcjN03Kk9dc3nDGQ.2Y23C.nj0KPOaeLDyE2nknYj5B1HHQS', 4, 2, NULL),
(1030533364, 'Johan', 'Garcia', 'fgfernan2508@gmail.com', '3107847571', '$2b$10$X1YeMUzUPNKD6L5M.Q7cxOwK7BTANB8zzy95GgqhNWp6/Whv09KJW', 1, 2, NULL),
(1234560987, 'Erika', 'Triana', 'erika@gmail.com', '3507722045', '$2b$10$TaXglTQfJbRCctsxExAuzeiLDSNt1GRSL3EqhAAjMBVdSqf/viPiy', 3, 2, NULL),
(1234567890, 'Nikole', 'Bernal', 'nikole@gmail.com', '3102963881', '$2b$10$WpLK4H9JeXcBjhMNKWFY6ue0mcot4YrwjKzmy4Ct2YDu6nEcQ/z4G', 2, 2, NULL),
(2147483647, 'Prueba', 'Prueba', 'prueba2508@gmail.com', '3107847571', '$2b$10$8m59i9J9w8CTzHG.xO1U/eeybVAUQScbVFXTNqunABoD5ZGQfNz7q', 1, 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_proyectos`
--

CREATE TABLE `usuarios_proyectos` (
  `usuariosID` int(10) UNSIGNED NOT NULL,
  `proyectosID` int(10) UNSIGNED NOT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura para la vista `getallusers`
--
DROP TABLE IF EXISTS `getallusers`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `getallusers`  AS SELECT `u`.`id` AS `id`, `u`.`nombre` AS `nombre`, `u`.`apellidos` AS `apellidos`, `u`.`email` AS `email`, `u`.`telefono` AS `telefono`, `u`.`password` AS `password`, `r`.`nombre` AS `rol`, `t`.`nombre` AS `tipo_documento` FROM ((`usuarios` `u` join `roles` `r` on(`u`.`rolID` = `r`.`id`)) join `tipo_documento` `t` on(`u`.`tipo_documento` = `t`.`id`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acciones`
--
ALTER TABLE `acciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_archivo_tarea` (`tareaID`);

--
-- Indices de la tabla `campos_personalizados`
--
ALTER TABLE `campos_personalizados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_campos_proyectos` (`proyectosID`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_comentario_tarea` (`tareaID`),
  ADD KEY `FK_comentario_usuario` (`usuarioID`);

--
-- Indices de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_mensaje_usuario` (`usuarioID`),
  ADD KEY `FK_mensaje_proyecto` (`proyectosID`);

--
-- Indices de la tabla `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_permisos_rol` (`rolID`),
  ADD KEY `FK_permisos_modulo` (`moduloID`),
  ADD KEY `FK_permisos_acciones` (`accionesID`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_proyectos_etiquetas` (`etiquetasID`);

--
-- Indices de la tabla `registros_tiempo`
--
ALTER TABLE `registros_tiempo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_registro_tarea` (`tareaID`),
  ADD KEY `FK_registro_usuario` (`usuarioID`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_tarea_usuario` (`usuarioID`),
  ADD KEY `FK_tarea_proyecto` (`proyectoID`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_usuario_rol` (`rolID`),
  ADD KEY `FK_usuarios_tipo_documento` (`tipo_documento`);

--
-- Indices de la tabla `usuarios_proyectos`
--
ALTER TABLE `usuarios_proyectos`
  ADD PRIMARY KEY (`usuariosID`,`proyectosID`),
  ADD KEY `FK_usuariosP_proyectos` (`proyectosID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acciones`
--
ALTER TABLE `acciones`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `archivos`
--
ALTER TABLE `archivos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `campos_personalizados`
--
ALTER TABLE `campos_personalizados`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `modulos`
--
ALTER TABLE `modulos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registros_tiempo`
--
ALTER TABLE `registros_tiempo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD CONSTRAINT `FK_archivo_tarea` FOREIGN KEY (`tareaID`) REFERENCES `tareas` (`id`);

--
-- Filtros para la tabla `campos_personalizados`
--
ALTER TABLE `campos_personalizados`
  ADD CONSTRAINT `FK_campos_proyectos` FOREIGN KEY (`proyectosID`) REFERENCES `proyectos` (`id`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `FK_comentario_tarea` FOREIGN KEY (`tareaID`) REFERENCES `tareas` (`id`),
  ADD CONSTRAINT `FK_comentario_usuario` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `FK_mensaje_proyecto` FOREIGN KEY (`proyectosID`) REFERENCES `proyectos` (`id`),
  ADD CONSTRAINT `FK_mensaje_usuario` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD CONSTRAINT `FK_permisos_acciones` FOREIGN KEY (`accionesID`) REFERENCES `acciones` (`id`),
  ADD CONSTRAINT `FK_permisos_modulo` FOREIGN KEY (`moduloID`) REFERENCES `modulos` (`id`),
  ADD CONSTRAINT `FK_permisos_rol` FOREIGN KEY (`rolID`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `FK_proyectos_etiquetas` FOREIGN KEY (`etiquetasID`) REFERENCES `etiquetas` (`id`);

--
-- Filtros para la tabla `registros_tiempo`
--
ALTER TABLE `registros_tiempo`
  ADD CONSTRAINT `FK_registro_tarea` FOREIGN KEY (`tareaID`) REFERENCES `tareas` (`id`),
  ADD CONSTRAINT `FK_registro_usuario` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `FK_tarea_proyecto` FOREIGN KEY (`proyectoID`) REFERENCES `proyectos` (`id`),
  ADD CONSTRAINT `FK_tarea_usuario` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FK_usuario_rol` FOREIGN KEY (`rolID`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FK_usuarios_tipo_documento` FOREIGN KEY (`tipo_documento`) REFERENCES `tipo_documento` (`id`);

--
-- Filtros para la tabla `usuarios_proyectos`
--
ALTER TABLE `usuarios_proyectos`
  ADD CONSTRAINT `FK_usuariosP_proyectos` FOREIGN KEY (`proyectosID`) REFERENCES `proyectos` (`id`),
  ADD CONSTRAINT `FK_usuariosP_usuarios` FOREIGN KEY (`usuariosID`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
