var Project = require('../models/project.model.js');
var Response = require('../viewmodels/apiResponse.js');
class ProjectService {


    async saveProject(projectModel) {
        debugger;
        var project = new Project();
        var response = new Response();
        var message = 'KLK';
        project.name = projectModel.name;
        project.category = projectModel.category;
        project.technologies = projectModel.technologies;
        project.year = projectModel.year;
        project.createdby = projectModel.createdby;
        project.description = projectModel.description;
        await project.save().then((res) => {
            // console.log(res);
            if (res) {
                response.message = 'Success'
            }
            else {
                response.message = 'Ha ocurrido un error';
            }
            // if()
        }).catch(error => {
            console.log(error);
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
            }
            else {
                response.message = 'Project not found';
                response.errors.push({ code: 404, message:'Project not Found' });
            }
        }).catch(error => {
            console.log('Ha ocurrido un error')
            response.message = 'Ha ocurrido un error';
            response.errors.push({ code: 500, message: JSON.stringify(error) });
        })
        return response;
    }

}

module.exports = ProjectService;