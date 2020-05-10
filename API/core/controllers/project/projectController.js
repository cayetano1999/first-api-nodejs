'use strict'

var response = require('../../viewmodels/apiResponse.js');
var ProjectService = require('../../services/project.service.js');

var projectServiceT = new ProjectService();

class ProjectController {

    home(req, res) {
        response.message = 'Hey Activos';
        response.value = null;
        var result = res.status(200).send(
            `<h1 style="color:#424242; text-align: center;">REST API WITH NODE JS</h1>
            <a style="color:#424242; text-align: center;">Created by <strong>Josue Cayetano</strong></a>
            `
        );
        return result;
    }

    saveProject(req, res) {
        var model = req.body;
        projectServiceT.saveProject(model).then(response=>{
            var result = res.status(response.code).send({
                response: response
            })
            return result;
        });
    }

    getProyectById(req, res){
        projectServiceT.getProject(req.params.id).then(response=>{
            var result = res.status(response.code).send(response)
            return result;
        })
    }

    getAllPprojects(req, res){
        projectServiceT.getAllProjects().then(response=>{
            var result = res.status(response.code).send(response);
            return result;
        })
    }

    updateProject(req, res){
        var model = req.body;
        projectServiceT.updateProject(model).then(response=>{
            var result = res.status(response.code).send(response);
            return result;
        })
    }

    removeProject(req, res){
        var model = req.body;
        projectServiceT.removeProject(model).then(response=>{
            var result = res.status(response.code).send(response);
            return result;
        })
    }
}

module.exports = ProjectController;