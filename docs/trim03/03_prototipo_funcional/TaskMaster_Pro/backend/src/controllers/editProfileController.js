const editProfileService = require('../services/editProfileService');

class editProfileController{
    constructor(){
        this.editProfileService = new editProfileService();
    }
    getData = async (req, res) => {
        try {
            const user = await this.editProfileService.getData(req.session.userId);
            res.json({ message: "Method Get: User Found", data: user, status: 200 });
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    };
    editProfile = async (req, res) => {
        try {
            const user = await this.editProfileService.editProfile(req.session.userId, req.body);
            res.status(200).json(user);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    };
    editPassword = async (req, res) => {
        try {
            const user = await this.editProfileService.alterPassword(req.session.userId, req.body);
            res.status(200).json(user);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    }
    cancelUser = async (req, res) => {
        try {
            const message = await this.editProfileService.cancelUser(req.session.userId);
            res.status(200).json(message);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    }
};

module.exports = new editProfileController();