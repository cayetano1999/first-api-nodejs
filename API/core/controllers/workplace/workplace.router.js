var express = require('express'); //importar express
var WorkPlaceController = require('./workplace.controller.js'); //importar el controlador

var router = express.Router(); // declarar la ruta con exprees;

//ProjectController
let workplace = new WorkPlaceController();
router.get('/home', workplace.home);
router.get('/getallworks', workplace.getAllWork);
router.post('/saveworkplace', workplace.saveWorkPlace);
router.get('/getworkplace/:id', workplace.getWorkPlace);
router.put('/updateworkplace', workplace.updateWorkPlace);
router.delete('/removeworkplace', workplace.deletetWorkPlace);
router.delete('/getworkplace/:id', workplace.getWorkPlace);

module.exports = router;