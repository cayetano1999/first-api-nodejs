var Project = require('../models/project.model.js');
var Response = require('../viewmodels/apiResponse.js');
class ProjectService {


    async saveProject(projectModel) {
        debugger;
        var project = new Project();
        var response = new Response();
        project.name = projectModel.name;
        project.category = projectModel.category;
        project.technologies = projectModel.technologies;
        project.year = projectModel.year;
        project.createdby = projectModel.createdby;
        project.description = projectModel.description;
        await project.save().then((res) => {
            if (res) {
                response.message = 'Success'
                response.code = 200;

            }
            else {
                response.message = 'Ha ocurrido un error';
                response.code = 500;
            }
        }).catch(error => {
            response.message = 'Ha ocurrido un error';
            response.code = 500;
            response.errors.push({ code: response.code, message: JSON.stringify(error) });
        });
        return response;

    }

    async getProject(projectId) {
        var response = new Response();
        // var project = new Project();
        await Project.findById(projectId).then(res => {
            console.log(res);
            if (res) {
                response.message = 'Project has been found';
                response.value = res;
                response.code = 200;

            }
            else {
                response.message = 'Project not found';
                response.code = 404;
                response.errors.push({ code: response.code, message: 'Project not Found' });
            }
        }).catch(error => {
            console.log('Ha ocurrido un error')
            response.message = 'Ha ocurrido un error';
            response.errors.push({ code: 500, message: JSON.stringify(error) });
            response.code = response.errors[0].code;
        })
        return response;
    }

    async getAllProjects() {
        var response = new Response();
        await Project.find({}).exec().then(res => {
            if (response) {
                response.message = 'Projects Found';
                response.value = res;
                response.code = 200;
            }
            else {
                response.message = 'Projects not found'
                response.code = 404;
            }
        }).catch(error => {
            console.log('Ha ocurrido un error')
            response.message = 'Ha ocurrido un error';
            response.errors.push({ code: 500, message: JSON.stringify(error) });
            response.code = response.errors[0].code;
        })
        return response;
    }

}

module.exports = ProjectService;