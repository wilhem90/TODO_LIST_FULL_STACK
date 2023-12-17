// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tasksController = require('./controllers/tasksController')

const router = express.Router()
router.get('/tasks', tasksController.getAll)

module.exports = router