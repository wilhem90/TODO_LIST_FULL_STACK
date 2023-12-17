// eslint-disable-next-line @typescript-eslint/no-var-requires
const { default: tasksModel } = require("../models/tasksModel")

const getAll = async(req, res) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const tasks = await tasksModel.getAll()
    return res.status(200).json(tasks)
}

module.exports = {
    getAll
}