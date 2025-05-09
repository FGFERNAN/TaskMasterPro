const ProjectService = require('../services/projectService');

class ProjectController {
    constructor() {
        this.projectService = new ProjectService();
    }

    // getAllProjects = async (req, res) => {
    //     try {
    //         const projects = await this.projectService.getAllProjects();
    //         res.json({ message: "Method Get", data: projects, status: 200 });
    //     } catch (err) {
    //         res.status(500).json({ message: err.message });
    //     }
    // };

    getPlantillasProyecto = async (req, res) => {
        try {
            const projects = await this.projectService.getPlantillasProyecto();
            res.json({ message: "Method Get", data: projects, status: 200 });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    getProjects = async (req, res) => {
        try {
            const usuarioId = req.session.userId;
            const projects = await this.projectService.getProjects(usuarioId);
            res.json({ message: "Method Get", data: projects, status: 200 });
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    };

    getProjectById = async (req, res) => {
        try {
            const project = await this.projectService.getProjectById(req.params.id);
            res.json({ message: "Method Get Id: Project Found", data: project, status: 200 });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    };

    createProject = async (req, res) => {
        try {
            const usuarioId = req.session.userId;
            const isTemplate = req.path.includes('/plantillas') || req.body.isTemplate;
            const newProject = await this.projectService.createProject(req.body, isTemplate, usuarioId);
            res.status(201).json(newProject);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    updateProject = async (req, res) => {
        try {
            const usuarioId = req.session.userId;
            const response = await this.projectService.updateProject(req.params.id, req.body, usuarioId);
            // Verificar el tipo de respuesta
            if (response.message && response.message.includes('desde plantilla')) {
                return res.status(201).json(response);
            }
            return res.status(200).json(response);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    };

    deleteProject = async (req, res) => {
        try {
            const project = await this.projectService.deleteProject(req.params.id);
            res.status(200).json(project);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

    addMembers = async (req, res) => {
        try {
            const { usuarioID } = req.body;
            const response = await this.projectService.addMember(req.params.id, usuarioID);
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    getProjectMembers = async (req, res) => {
        try {
            const members = await this.projectService.getProjectMembers(req.params.id);
            res.json({ message: "Method Get", data: members, status: 200 });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    deleteMembers = async (req, res) => {
        try {
            const { usuarioID } = req.body;
            const response = await this.projectService.deleteMembers(req.params.id, usuarioID);
            res.status(200).json(response);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = new ProjectController();