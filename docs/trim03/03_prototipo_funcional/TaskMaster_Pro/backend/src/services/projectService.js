const db = require('../config/dbConnection');
const Project = require('../models/project');
const Members = require('../models/members');

class ProjectService {
    // async getAllProjects() {
    //     try {
    //         const results = await db.query(`SELECT * FROM getAllProjects WHERE fechaInicio AND fechaFIN IS NOT NULL;`);
    //         return results.map(project => new Project(...Object.values(project)));
    //     } catch (err) {
    //         console.error('Error fetching projects: ', err.message);
    //         throw err;
    //     }
    // };

    async getPlantillasProyecto() {
        try {
            const results = await db.query(`SELECT * FROM getAllProjects WHERE (fechaInicio IS NULL OR fechaInicio = '') AND (fechaFin IS NULL OR fechaFin = '');`);
            return results.map(project => new Project(...Object.values(project)));
        } catch (err) {
            console.error('Error fetching projects: ', err.message);
            throw err;
        }
    }

    async getProjects(userId) {
        try {
            const results = await db.query(`SELECT p.* FROM proyectos p JOIN usuarios_proyectos up ON p.id = up.proyectoID WHERE up.usuarioID = ?;`, [userId]);
            return results.map(project => new Project(...Object.values(project)));
        } catch (err) {
            console.error('Error fetching projects: ', err.message)
        }
    }

    async getProjectById(id) {
        try {
            const results = await db.query(`SELECT * FROM proyectos WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error("Proyecto no encontrado");
            return new Project(...Object.values(results[0]));
        } catch (err) {
            console.error('Error fetching projects: ', err.message);
            throw err;
        }
    };

    async createProject(data, isTemplate = false, userId) {
        try {
            if (!isTemplate && (data.fechaInicio || data.fechaFin)) {
                const verificarNombre = `SELECT id FROM proyectos WHERE nombre = ? AND (fechaInicio IS NOT NULL OR fechaFin IS NOT NULL) AND id != ?;`;
                const nombreExiste = await db.query(verificarNombre, [data.nombre, data.id || 0]);
                if (nombreExiste.length > 0) {
                    throw new Error("El nombre ingresado ya se encuentra registrado en otro proyecto activo");
                }
            }
            if (data.fechaInicio > data.fechaFin) throw new Error('La fecha de inicio no puede ser posterior a la fecha de fin');
            const projectData = isTemplate
                ? { ...data, fechaInicio: null, fechaFin: null }
                : data;

            const dataQry = [
                projectData.nombre,
                projectData.descripcion,
                projectData.fechaInicio,
                projectData.fechaFin,
                projectData.estado,
                projectData.prioridad,
                projectData.etiquetasID,
            ];
            var qry = `INSERT INTO proyectos(nombre, descripcion, fechaInicio, fechaFin, estado, prioridad, etiquetasID) VALUES (?, ?, ?, ?, ?, ?, ?);`;
            const results = await db.query(qry, dataQry);
            const newProjectId = results.insertId;
            if(!isTemplate && userId) {
                await this.addMember(newProjectId, userId);
            }
            if (results.length === 0) {
                throw new Error("Proyecto no creado");
            }
            return { message: "Poyecto creado con exito" };


        } catch (err) {
            console.error('Error creating project: ', err.message);
            throw err;
        }
    };

    async convertTemplateToProject(templateId, projectData, userId) {
        try {
            // 1. Obtener la plantilla original
            const template = await this.getProjectById(templateId);

            // 2. Crear nuevo proyecto (clonando la plantilla)
            const newProject = {
                ...template,
                ...projectData,
                nombre: projectData.nombre || `Copia de ${template.nombre}`
            };

            await this.createProject(newProject, false, userId);

            // 3. Devolver la plantilla original a estado "plantilla"
            await db.query(
                `UPDATE proyectos SET fechaInicio = NULL, fechaFin = NULL WHERE id = ?`,
                [templateId]
            );

            return { message: "Proyecto creado desde plantilla correctamente" };
        } catch (err) {
            console.error('Error al convertir plantilla:', err.message);
            throw err;
        }
    }

    async updateProject(id, data, userId) {
        try {
            const currentProject = await this.getProjectById(id);
            const isTemplate = currentProject.fechaInicio === null && currentProject.fechaFin === null;

            // Forzar NULL si es plantilla y no se están agregando fechas
            if (isTemplate && (!data.fechaInicio && !data.fechaFin)) {
                data.fechaInicio = null;
                data.fechaFin = null;
            }
            // Si es plantilla y están agregando fechas
            if (isTemplate && (data.fechaInicio || data.fechaFin)) {
                if (!userId) {
                    throw new Error("Se requiere ID de usuario para convertir plantilla a proyecto");
                }
                const newProject = await this.convertTemplateToProject(id, data, userId);
                return {
                    message: "Proyecto creado desde plantilla correctamente."
                }
            }
            if (currentProject.fechaInicio || currentProject.fechaFin) {
                const verificarNombre = `SELECT id FROM proyectos WHERE nombre = ? AND (fechaInicio IS NOT NULL OR fechaFin IS NOT NULL) AND id != ?;`;
                const nombreExiste = await db.query(verificarNombre, [data.nombre, id]);
                if (nombreExiste.length > 0) {
                    throw new Error("El nombre ingresado ya se encuentra registrado en un proyecto activo en el sistema");
                }
            }
            const getProject = await db.query(`SELECT * FROM proyectos WHERE id = ?`, [id]);

            if (getProject.length != 0) {
                var dataQry = [data.nombre, data.descripcion, data.fechaInicio, data.fechaFin, data.estado, data.prioridad, data.etiquetasID];
                if (data.fechaInicio > data.fechaFin) throw new Error('La fecha de inicio no puede ser posterior a la fecha de fin');
                const results = await db.query(`UPDATE proyectos SET nombre=?, descripcion=?, fechaInicio=?, fechaFin=?, estado=?, prioridad=?, etiquetasID=? WHERE id=?`, [...dataQry, id]);
                if (results.length != 0) {
                    return { message: "Proyecto actualizado con exito" };
                } else {
                    throw new Error("Proyecto no actualizado");
                }
            } else {
                return { message: "Unregistered project" };
            }

        } catch (err) {
            console.error('Error updating project: ', err.message);
            throw err;
        }
    };

    async deleteProject(id) {
        try {
            const getProject = await db.query(`SELECT * FROM proyectos WHERE id  = ?`, [id]);
            if (getProject.length != 0) {
                const results = await db.query(`DELETE FROM proyectos WHERE id = ?`, [id]);
                if (results.length != 0) {
                    return { message: "Proyecto eliminado con exito" };
                } else {
                    throw new Error("Proyecto no eliminado");
                }
            } else {
                return { message: "Project not exists" };
            }
        } catch (err) {
            if (err.code === 'ER_ROW_IS_REFERENCED_2') {
                throw {
                    code: 'P_IN_USE',
                    message: "No se puede eliminar el proyecto porque tiene tareas asignadas",
                };
            }
            console.error('Error deleting role: ', err.message);
            throw err;
        }
    };

    async addMember(projectId, userId) {
        try {
            const verificarMiembros = `SELECT id FROM usuarios_proyectos WHERE proyectoID = ? AND usuarioID = ?;`;
            const miembroExiste = await db.query(verificarMiembros, [projectId, userId]);
            const verificarProyecto = `SELECT * FROM proyectos WHERE id = ?;`;
            const proyectoExiste = await db.query(verificarProyecto, [projectId]);
            if (miembroExiste.length > 0) {
                throw new Error("El miembro que quieres agregar ya se encuentra asignado a este proyecto");
            } else if(proyectoExiste.length === 0) {
                throw new Error("El proyecto al que intentas agregar este miembro no existe");
            }
            const results = await db.query(`INSERT INTO usuarios_proyectos (proyectoID, usuarioID) VALUES (?,?)`, [projectId, userId]);
            if (results.length != 0) {
                return { message: "Usuario asignado con exito" };
            } else {
                throw new Error("Usuario no asignado");
            }
        } catch (err) {
            console.error('Error assigning user: ', err.message);
            throw err;
        }
    };

    async getProjectMembers(projectId) {
        try {
            const results = await db.query(`SELECT u.id, u.nombre, u.apellidos, u.email FROM usuarios_proyectos up 
                JOIN usuarios u ON up.usuarioID = u.id WHERE up.proyectoID = ?;`, [projectId]);
            if (results.length === 0) throw new Error("Este proyecto no tiene ningun miembro asignado");
            return results.map(member => new Members(...Object.values(member)));
        } catch (err) {
            console.error('Error fetching members: ', err.message);
            throw err;
        }
    };

    async deleteMembers(projectId, userId) {
        try {
            const verificarMiembros = `SELECT id FROM usuarios_proyectos WHERE proyectoID = ? AND usuarioID = ?;`;
            const miembroExiste = await db.query(verificarMiembros, [projectId, userId]);
            if (miembroExiste.length > 0) {
                const results = await db.query(`DELETE FROM usuarios_proyectos WHERE proyectoID = ? AND usuarioID = ?`, [projectId, userId]);
                if (results.length != 0) {
                    return { message: "Miembro eliminado con exito" };
                } else {
                    throw new Error("Miembro no eliminado");
                }
            } else {
                throw new Error("El miembro que quieres eliminar no se encuentra asignado a este proyecto");
            }

        } catch (err) {
            console.error('Error deleting member: ', err.message);
            throw err;
        }
    }
}

module.exports = ProjectService;