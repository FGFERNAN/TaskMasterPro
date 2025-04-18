const DBConnection = require('../config/dbConnection');
const Project = require('../models/project');

class ProjectService {
    constructor() {
        this.db = new DBConnection();
    }

    async getAllProjects() {
        try {
            const results = await this.db.query(`SELECT * FROM getAllProjects WHERE fechaInicio AND fechaFIN IS NOT NULL;`);
            return results.map(project => new Project(...Object.values(project)));
        } catch (err) {
            console.error('Error fetching projects: ', err.message);
            throw err;
        }
    };

    async getPlantillasProyecto() {
        try {
            const results = await this.db.query(`SELECT * FROM getAllProjects WHERE (fechaInicio IS NULL OR fechaInicio = '') AND (fechaFin IS NULL OR fechaFin = '');`);
            return results.map(project => new Project(...Object.values(project)));
        } catch (err) {
            console.error('Error fetching projects: ', err.message);
            throw err;
        }
    }

    async getProjectById(id) {
        try {
            const results = await this.db.query(`SELECT * FROM proyectos WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error("Proyecto no encontrado");
            return new Project(...Object.values(results[0]));
        } catch (err) {
            console.error('Error fetching projects: ', err.message);
            throw err;
        }
    };

    async createProject(data, isTemplate = false) {
        try {
            if (!isTemplate && (data.fechaInicio || data.fechaFin)) {
                const verificarNombre = `SELECT id FROM proyectos WHERE nombre = ? AND (fechaInicio IS NOT NULL OR fechaFin IS NOT NULL) AND id != ?;`;
                const nombreExiste = await this.db.query(verificarNombre, [data.nombre, data.id || 0]);
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
                projectData.etiquetasID
            ];
            var qry = `CALL insertProject(?,?,?,?,?,?,?);`;
            const results = await this.db.query(qry, dataQry);
            if (results.length === 0) {
                throw new Error("Proyecto no creado");
            }
            return { message: "Poyecto creado con exito" };


        } catch (err) {
            console.error('Error creating project: ', err.message);
            throw err;
        }
    };

    async convertTemplateToProject(templateId, projectData) {
        try {
            // 1. Obtener la plantilla original
            const template = await this.getProjectById(templateId);

            // 2. Crear nuevo proyecto (clonando la plantilla)
            const newProject = {
                ...template,
                ...projectData,
                nombre: projectData.nombre || `Copia de ${template.nombre}`
            };

            await this.createProject(newProject);

            // 3. Devolver la plantilla original a estado "plantilla"
            await this.db.query(
                `UPDATE proyectos SET fechaInicio = NULL, fechaFin = NULL WHERE id = ?`,
                [templateId]
            );

            return { message: "Proyecto creado desde plantilla correctamente" };
        } catch (err) {
            console.error('Error al convertir plantilla:', err.message);
            throw err;
        }
    }

    async updateProject(id, data) {
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
                const newProject = await this.convertTemplateToProject(id, data);
                return {
                    message: "Proyecto creado desde plantilla correctamente."
                }
            }
            if (currentProject.fechaInicio || currentProject.fechaFin) {
                const verificarNombre = `SELECT id FROM proyectos WHERE nombre = ? AND (fechaInicio IS NOT NULL OR fechaFin IS NOT NULL) AND id != ?;`;
                const nombreExiste = await this.db.query(verificarNombre, [data.nombre, id]);
                if (nombreExiste.length > 0) {
                    throw new Error("El nombre ingresado ya se encuentra registrado en un proyecto activo en el sistema");
                }
            }
            const getProject = await this.db.query(`SELECT * FROM proyectos WHERE id = ?`, [id]);

            if (getProject.length != 0) {
                var dataQry = [data.nombre, data.descripcion, data.fechaInicio, data.fechaFin, data.estado, data.prioridad, data.etiquetasID];
                if (data.fechaInicio > data.fechaFin) throw new Error('La fecha de inicio no puede ser posterior a la fecha de fin');
                const results = await this.db.query(`UPDATE proyectos SET nombre=?, descripcion=?, fechaInicio=?, fechaFin=?, estado=?, prioridad=?, etiquetasID=? WHERE id=?`, [...dataQry, id]);
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
            const getProject = await this.db.query(`SELECT * FROM proyectos WHERE id  = ?`, [id]);
            if (getProject.length != 0) {
                const results = await this.db.query(`DELETE FROM proyectos WHERE id = ?`, [id]);
                if (results.length != 0) {
                    return { message: "Proyecto eliminado con exito" };
                } else {
                    throw new Error("Proyecto no eliminado");
                }
            } else {
                return { message: "Project not exists" };
            }
        } catch (err) {
            console.error('Error deleting project: ', err.message);
            throw err;
        }
    };
}

module.exports = ProjectService;