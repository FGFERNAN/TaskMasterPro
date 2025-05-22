const TaskService = require('../services/taskService');

class TaskController {
    constructor() {
        this.taskService = new TaskService();
    }

    getAllTasks = async (req, res) => {
        try {
            const tasks = await this.taskService.getAllTasks();
            res.json({ message: "Method Get: ", data: tasks, status: 200});
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new TaskController();