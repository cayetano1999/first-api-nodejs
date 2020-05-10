var express = require('express');
var ProjectController = require('./projectController');

var router = express.Router();

//ProjectController
let project = new ProjectController();
router.get('/home', project.home);
router.post('/saveProject', project.saveProject);
router.get('/getproject/:id', project.getProyectById);
router.get('/getAllProjects', project.getAllPprojects);
router.put('/updateProject', project.updateProject);
router.delete('/removeProject', project.removeProject);


module.exports = router;