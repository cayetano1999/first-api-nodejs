var WorkPlaceService = require('../../services/workplace.service.js');
var workplaceService = new WorkPlaceService();

class WorkPlaceController {

    home(req, res){
        var result = res.status(200).send(
            `<h1 style="color:#424242; text-align:center;">WorkPlace Controller</h1>`
        ) 
    }
    saveWorkPlace(req, res){
        var model = req.body;
        workplaceService.saveWorkPlace(model).then(response=>{
            var result = res.status(response.code).send(response);
            return result;
        })
    }

    getAllWork(req, res){
        workplaceService.getAllWorks().then(response=>{
            var result = res.status(response.code).send(response);
            return result;
        })
    }

    getWorkPlace(req, res){
        var id = req.params.id;
        workplaceService.getWorkerPlace(id).then(response=>{
            var result = res.status(response.code).send(response);
            return result;
        })
    }

    updateWorkPlace(req, res){
        var model = req.body;
        workplaceService.updateWorkPlace(model).then(response=>{
            var result = res.status(response.code).send(response);
            return result;
        })
    }

    deletetWorkPlace(req, res){
        var model = req.body;
        workplaceService.removeWorkPlace(model).then(response=>{
            var result = res.status(response.code).send(response);
            return result;
        })
    }

}

module.exports = WorkPlaceController;