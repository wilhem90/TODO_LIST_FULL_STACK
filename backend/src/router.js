const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksmiddleware = require('./middleware/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks',tasksmiddleware.validateBody,  tasksController.createTask);
router.delete('/tasks/:id',  tasksController.deleTask);
router.put('/tasks/:id',  tasksController.updateTask);
router.get('/tasks/:id',  tasksController.getTask);

module.exports = router;