const tasksModel = require('../models/tasksModel');

const getAll = async (req, res) => {

  const [tasks] = await tasksModel.getAll();

  return res.status(200).json(tasks);

};

const getTask = async(req, res) => {
  const {id} = req.params;
  const getedTask = await tasksModel.getTask(id);
  return getedTask ? res.status(200).json(getedTask) : res.status(404).json({
    'message': `O usuario ${id}, não foi encontrado!`
  });
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
  const deletarSuccesso = await tasksModel.deleTask(id);
  return deletarSuccesso ? res.status(200).json({
    'Message': `Usuário ${id}, foi deletado com sucesso!`
  }) : res.status(504).json({
    'Message': `Usuário ${id}, não existir em nosso banco de dados`
  });
};


const updateTask = async(req, res) => {
  const {id} = req.params;
  await tasksModel.updateTask(id, req.body);
  return res.status(204).json({
    'Message': `Usuário ${id}, foi deletado com sucesso!`
  });
};

module.exports = {
  getAll,
  createTask,
  deleTask,
  updateTask,
  getTask,
};