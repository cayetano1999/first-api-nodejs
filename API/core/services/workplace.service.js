//importar los modelos de Mongoose
var WorkPlace = require('../models/workplace.model.js');
var Response = require('../viewmodels/apiResponse.js');
var HttpCode = require('../../helpers/errors.code.js');
class WorkPlaceSerice {

    async saveWorkPlace(workplaceModel) {
        var response = new Response();
        var workplace = new WorkPlace();
        workplace.company = workplaceModel.company,
        workplace.duration = workplaceModel.duration,
        workplace.departament = workplaceModel.departament,
        workplace.boos = workplaceModel.boos,
        workplace.ocupation = workplaceModel.ocupation,
        workplace.salary = workplaceModel.salary;

        await workplace.save().then(res=>{
            if(res){
                response.message = 'Success'
                response.code = HttpCode.Created;
            }
            else{
                response.message = 'Can not add the workplace'
                response.code = HttpCode.NoContent;
            }

        }).catch(error=>{
            response.message = 'Ha ocurrido un error';
            response.code = HttpCode.InternalServerError;
            response.errors.push({ code: response.code, message: JSON.stringify(error) });
        });
        return response;
    }

    async getAllWorks() {
        var response = new Response();
        await WorkPlace.find({}).exec().then(res => {
            if (response) {
                response.message = 'Wroks Found';
                response.value = res;
                response.code = HttpCode.OK;
            }
            else {
                response.message = 'Works not found'
                response.code = HttpCode.NotFound;
            }
        }).catch(error => {
            console.log('Ha ocurrido un error')
            response.message = 'Ha ocurrido un error';
            response.errors.push({ code: HttpCode.InternalServerError, message: JSON.stringify(error) });
            response.code = response.errors[0].code;
        })
        return response;
    }

    async getWorkerPlace(workId) {
        var response = new Response();
        await WorkPlace.findById(workId).then(res => {
            console.log(res);
            if (res) {
                response.message = 'work has been found';
                response.value = res;
                response.code = HttpCode.OK;

            }
            else {
                response.message = 'work not found';
                response.code = HttpCode.NotFound;
                response.errors.push({ code: response.code, message: 'work not Found' });
            }
        }).catch(error => {
            console.log('Ha ocurrido un error')
            response.message = 'Ha ocurrido un error';
            response.errors.push({ code: HttpCode.InternalServerError, message: JSON.stringify(error) });
            response.code = response.errors[0].code;
        })
        return response;
    }

    async updateWorkPlace(workModel){
        var response = new Response();
        await WorkPlace.findByIdAndUpdate(workModel._id, workModel).then(res=>{
            if(res){
                response.message = 'workplace has been updated successfully';
                response.code = HttpCode.OK;
            }
            else{
                response.message = 'workplace not found to update';
                response.code = HttpCode.NotFound;
            }
        }).catch(error=>{
            response.message = 'Ha ocurrido un error';
            response.errors.push({ code: HttpCode.InternalServerError, message: JSON.stringify(error) });
            response.code = response.errors[0].code;
        })
        return response;
    }

    async removeWorkPlace(workModel){
        var response = new Response();
        console.log(workModel);
        await WorkPlace.findByIdAndRemove(workModel._id, workModel).then(res=>{
            if(res){
                response.message = 'work has been removed successfully';
                response.code = HttpCode.OK;
            }
            else{
                response.message = 'work not found to remove';
                response.code = HttpCode.NotFound;
            }
        }).catch(error=>{
            response.message = 'Ha ocurrido un error';
            response.errors.push({ code: HttpCode.InternalServerError, message: JSON.stringify(error) });
            response.code = response.errors[0].code;
        })
        return response;
    }
}

module.exports = WorkPlaceSerice;