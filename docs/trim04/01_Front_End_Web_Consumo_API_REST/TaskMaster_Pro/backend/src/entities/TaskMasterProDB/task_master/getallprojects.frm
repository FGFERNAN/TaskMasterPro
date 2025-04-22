TYPE=VIEW
query=select `p`.`id` AS `id`,`p`.`nombre` AS `nombre`,`p`.`descripcion` AS `descripcion`,`p`.`fechaInicio` AS `fechaInicio`,`p`.`fechaFin` AS `fechaFin`,`p`.`estado` AS `estado`,`p`.`prioridad` AS `prioridad`,`e`.`nombre` AS `etiquetas` from (`task_master`.`proyectos` `p` left join `task_master`.`etiquetas` `e` on(`p`.`etiquetasID` = `e`.`id`))
md5=b1d51e44fc51be71ab72398955d5b634
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=0001744236326405839
create-version=2
source=SELECT p.id, p.nombre, p.descripcion, p.fechaInicio, p.fechaFin, p.estado, p.prioridad, e.nombre AS etiquetas FROM proyectos p\n	LEFT JOIN etiquetas e ON p.etiquetasID = e.id
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `p`.`id` AS `id`,`p`.`nombre` AS `nombre`,`p`.`descripcion` AS `descripcion`,`p`.`fechaInicio` AS `fechaInicio`,`p`.`fechaFin` AS `fechaFin`,`p`.`estado` AS `estado`,`p`.`prioridad` AS `prioridad`,`e`.`nombre` AS `etiquetas` from (`task_master`.`proyectos` `p` left join `task_master`.`etiquetas` `e` on(`p`.`etiquetasID` = `e`.`id`))
mariadb-version=100432
