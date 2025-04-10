const DBConnection = require('../config/dbConnection');
const Project = require('../models/project');

class ProjectService {
    constructor() {
        this.db = new DBConnection();
    }

    async getAllProjects() {
        try {
            const results = await this.db.query(`SELECT * FROM getAllProjects;`);
            return results.map(project => new Project(...Object.values(project)));
        } catch (err) {
            console.error('Error fetching projects: ', err.message);
            throw err;
        }
    };

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

    async createProject(data) {
        try {
            const verificarNombre = `SELECT id FROM proyectos WHERE nombre = ?;`;
            const nombreExiste = await this.db.query(verificarNombre, [data.nombre]);
            if (nombreExiste.length > 0) {
                throw new Error("El nombre ingresado ya se encuentra registrado en otro proyecto activo");
            }
            var dataQry = [data.nombre, data.descripcion, data.fechaInicio, data.fechaFin, data.estado, data.prioridad, data.etiquetasID];
            if(data.fechaInicio > data.fechaFin) throw new Error('La fecha de inicio no puede ser posterior a la fecha de fin');
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

    async updateProject(id, data) {
        try {
            const getProject = await this.db.query(`SELECT * FROM proyectos WHERE id = ?`, [id]);
            const verificarNombre = `SELECT id FROM proyectos WHERE nombre = ? AND id != ?;`;
            const nombreExiste = await this.db.query(verificarNombre, [data.nombre, id]);
            if (nombreExiste.length > 0) {
                throw new Error("El nombre ingresado ya se encuentra registrado en un proyecto activo en el sistema");
            }
            if (getProject.length != 0) {
                var dataQry = [data.nombre, data.descripcion, data.fechaInicio, data.fechaFin, data.estado, data.prioridad, data.etiquetasID];
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