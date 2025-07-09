TYPE=VIEW
query=select `u`.`id` AS `id`,`u`.`nombre` AS `nombre`,`u`.`apellidos` AS `apellidos`,`u`.`email` AS `email`,`u`.`telefono` AS `telefono`,`u`.`password` AS `password`,`r`.`nombre` AS `rol`,`t`.`nombre` AS `tipo_documento` from ((`task_master`.`usuarios` `u` join `task_master`.`roles` `r` on(`u`.`rolID` = `r`.`id`)) join `task_master`.`tipo_documento` `t` on(`u`.`tipo_documento` = `t`.`id`))
md5=4df7c737bb790ed5648bb96b84ddf2c0
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=0001733805095390287
create-version=2
source=SELECT u.id, u.nombre, u.apellidos, u.email, u.telefono, u.password, r.nombre AS rol, t.nombre AS tipo_documento FROM usuarios u\n	JOIN roles r ON u.rolID = r.id JOIN tipo_documento t ON u.tipo_documento = t.id
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `u`.`id` AS `id`,`u`.`nombre` AS `nombre`,`u`.`apellidos` AS `apellidos`,`u`.`email` AS `email`,`u`.`telefono` AS `telefono`,`u`.`password` AS `password`,`r`.`nombre` AS `rol`,`t`.`nombre` AS `tipo_documento` from ((`task_master`.`usuarios` `u` join `task_master`.`roles` `r` on(`u`.`rolID` = `r`.`id`)) join `task_master`.`tipo_documento` `t` on(`u`.`tipo_documento` = `t`.`id`))
mariadb-version=100432
