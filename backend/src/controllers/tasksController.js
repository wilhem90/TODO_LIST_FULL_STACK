const tasksModel = require('../models/tasksModel');

const getAll = async (req, res) => {

  const [tasks] = await tasksModel.getAll();

  return res.status(200).json(tasks);

};

const createTask = async(req, res) => {
  const [createdTask] = await tasksModel.createTask(req.body);

  return res.status(201).json({
    'MESSAGE': 'Conteudo criado com successo!',
    'ID': createdTask.insertId,
  });
};

const deleTask = async(req, res) => {
  const {id} = req.params;
  await tasksModel.deleTask(id);
  return res.status(204).json({
    'Message': 'Usuário deletado com sucesso!'
  });
};

module.exports = {
  getAll,
  createTask,
  deleTask
};