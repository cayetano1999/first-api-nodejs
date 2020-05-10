var express = require('express');
var ProjectController = require('../controllers/projectController.js');

var router = express.Router();

//ProjectController
let project = new ProjectController();
router.get('/home', project.home);
router.post('/saveProject', project.saveProject);
router.get('/getproject/:id', project.getProyectById);
router.get('/getAllProjects', project.getAllPprojects);



module.exports = router;