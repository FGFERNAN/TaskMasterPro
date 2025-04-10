const ProjectService = require('../services/projectService');

class ProjectController {
    constructor() {
        this.projectService = new ProjectService();
    }

    getAllProjects = async (req, res) => {
        try {
            const projects = await this.projectService.getAllProjects();
            res.json({ message: "Method Get", data: projects, status: 200 });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    getProjectById = async (req, res) => {
        try {
            const project = await this.projectService.getProjectById(req.params.id);
            res.json({ message: "Method Get Id: Project Found", data: project, status: 200 });
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    };

    createProject = async (req, res) => {
        try {
            const newProject = await this.projectService.createProject(req.body);
            res.status(201).json(newProject);
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    };

    updateProject = async (req, res) => {
        try {
            const project = await this.projectService.updateProject(req.params.id, req.body);
            res.status(200).json(project);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    };

    deleteProject = async (req, res) => {
        try {
            const project = await this.projectService.deleteProject(req.params.id);
            res.status(200).json(project);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = new ProjectController();