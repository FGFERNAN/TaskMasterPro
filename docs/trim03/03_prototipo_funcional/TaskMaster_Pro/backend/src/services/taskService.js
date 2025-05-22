const DBConnection = require('../config/dbConnection');
const Task = require('../models/task');

class TaskService {
    constructor() {
        this.db = new DBConnection();
    }

    async getAllTasks() {
        try {
            const results = await this.db.query(`SELECT * FROM getAllTasks;`);
            return results.map(task => new Task(...Object.values(task)));
        } catch (err) {
            console.error('Error fetching tasks: ', err.message);
            throw err;
        }
    }
}

module.exports = TaskService;