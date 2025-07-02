const TaskService = require('../services/taskService');

class TaskController {
    constructor() {
        this.taskService = new TaskService();
    }

    getAllTasks = async (req, res) => {
        try {
            const tasks = await this.taskService.getAllTasks();
            res.json({ message: "Method Get: ", data: tasks, status: 200 });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    getTaskById = async (req, res) => {
        try {
            const task = await this.taskService.getTaskById(req.params.id);
            res.json({ message: "Method Get Id: Task Found", data: task, status: 200 });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    };

    getTaskEarring = async (req, res) => {
        try {
            const tasks = await this.taskService.getTaskEarring(req.params.id);
            res.json({ message: "Method Get: ", data: tasks, status: 200 });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    getTaskInProgress = async (req, res) => {
        try {
            const tasks = await this.taskService.getTaskInProgress(req.params.id);
            res.json({ message: "Method Get: ", data: tasks, status: 200 });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    getTaskFinished = async (req, res) => {
        try {
            const tasks = await this.taskService.getTaskFinished(req.params.id);
            res.json({ message: "Method Get: ", data: tasks, status: 200 });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    getMyTasks = async (req, res) => {
        try {
            const usuarioId = req.session.userId;
            const tasks = await this.taskService.getMyTasks(usuarioId);
            res.json({ message: "Method Get: ", data: tasks, status: 200 });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    createTask = async (req, res) => {
        try {
            const newTask = await this.taskService.createTask(req.body, req.params.id);
            res.status(201).json(newTask);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    updateTask = async (req, res) => {
        try {
            const response = await this.taskService.updateTask(req.params.id, req.body);
            res.status(200).json(response);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

    daleteTask = async (req, res) => {
        try {
            const response = await this.taskService.deleteTask(req.params.id);
            res.status(200).json(response);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };
}

module.exports = new TaskController();