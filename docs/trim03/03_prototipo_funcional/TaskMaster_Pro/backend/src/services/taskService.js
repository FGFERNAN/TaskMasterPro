const db = require('../config/dbConnection');
const Task = require('../models/task');

class TaskService {
    async getAllTasks() {
        try {
            const results = await db.query(`SELECT * FROM getAllTasks;`);
            return results.map(task => new Task(...Object.values(task)));
        } catch (err) {
            console.error('Error fetching tasks: ', err.message);
            throw err;
        }
    };

    async getTaskById(id) {
        try {
            const results = await db.query(`SELECT * FROM tareas WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error('Tarea no encontrada');
            return new Task(...Object.values(results[0]));
        } catch (err) {
            console.error('Error fetching task: ', err.message);
            throw err;
        }
    };

    async getTaskEarring(proyectoID) {
        try {
            const procedure = 'CALL getTaskEarring(?)';
            const results = await db.query(procedure, [proyectoID]);
            if (results.length === 0) throw new Error('Tarea no encontrada');
            return results[0].map(task => new Task(...Object.values(task)));
        } catch (err) {
            console.error('Error fetching tasks: ', err.message);
            throw err;
        }
    };

    async getTaskInProgress(proyectoID) {
        try {
            const procedure = 'CALL getTaskInProgress(?)';
            const results = await db.query(procedure, [proyectoID]);
            if (results.length === 0) throw new Error('Tarea no encontrada');
            return results[0].map(task => new Task(...Object.values(task)));
        } catch (err) {
            console.error('Error fetching tasks: ', err.message);
            throw err;
        }
    };

    async getTaskFinished(proyectoID) {
        try {
            const procedure = 'CALL getTaskFinished(?)';
            const results = await db.query(procedure, [proyectoID]);
            if (results.length === 0) throw new Error('Tarea no encontrada');
            return results[0].map(task => new Task(...Object.values(task)));
        } catch (err) {
            console.error('Error fetching tasks: ', err.message);
            throw err;
        }
    };

    async getMyTasks(userId) {
        try {
            const procedure = 'CALL misTareas(?)';
            const results = await db.query(procedure, [userId]);
            if(results.length === 0) throw new Error('Tarea no encontrada');
            return results[0].map(task => new Task(...Object.values(task)));
        } catch (err) {
            console.error('Error fetching task: ', err.message);
            throw err;
        }
    }

    async createTask(data, projectID) {
        try {
            const verificarNombre = `SELECT id FROM tareas WHERE nombre = ?`;
            const nombreExiste = await db.query(verificarNombre, [data.nombre]);
            if (nombreExiste.length > 0) {
                throw new Error("El nombre ingresado ya se encuentra registrado en otra tarea activa")
            }
            if (data.fechaInicio > data.fechaFin) throw new Error('La fecha de inicio no puede ser posterior a la fecha de fin');
            var dataQry = [data.nombre, data.descripcion, data.fechaInicio, data.fechaFin, data.estado, data.prioridad, projectID];
            var qry = `CALL insertTask(?,?,?,?,?,?,?);`;
            const results = await db.query(qry, dataQry);
            if (results.length === 0) {
                throw new Error('Tarea no creada');
            }
            return { message: "Tarea creada con exito" };
        } catch (err) {
            console.error('Error creating task: ', err.message);
            throw err;
        }
    };

    async updateTask(id, data) {
        try {
            const getTask = await db.query(`SELECT * FROM tareas WHERE id = ?;`, [id]);
            const verificarNombre = `SELECT id FROM tareas WHERE nombre = ? AND id != ?;`;
            const nombreExiste = await db.query(verificarNombre, [data.nombre, id]);
            if (nombreExiste.length > 0) {
                throw new Error("El nombre ingresado ya se encuentra registrado en una tarea activa en el sistema");
            }
            if (getTask.length != 0) {
                var dataQry = [data.nombre, data.descripcion, data.fechaInicio, data.fechaFin, data.estado, data.prioridad, data.usuarioID];
                if (data.fechaInicio > data.fechaFin) throw new Error('La fecha de inicio no puede ser posterior a la fecha de fin');
                const results = await db.query(`UPDATE tareas SET nombre=?, descripcion=?, fechaInicio=?, fechaFin=?, estado=?, prioridad=?, usuarioID=? WHERE id=?;`, [...dataQry, id]);
                if (results.length != 0) {
                    return { message: "Tarea actualizada con exito" };
                } else {
                    throw new Error("Tarea no actualizada");
                }
            } else {
                return { message: "Unregistered task" };
            }
        } catch (err) {
            console.error('Error updating task: ', err.message);
            throw err;
        }
    };

    async deleteTask(id) {
        try {
            const getTask = await db.query(`SELECT * FROM tareas WHERE id = ?;`, [id]);
            if (getTask.length != 0) {
                const results = await db.query(`DELETE FROM tareas WHERE id = ?;`, [id]);
                if (results.length != 0) {
                    return { message: "Tarea eliminada con exito" };
                } else {
                    throw new Error("Tarea no eliminada");
                }
            } else {
                return { message: "Task not exists" };
            }
        } catch (err) {
            console.error('Error deleting task: ', err.message);
            throw err;
        }
    };
}

module.exports = TaskService;