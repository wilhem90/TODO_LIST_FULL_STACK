const connection = require('./conection');
const getAll = async() => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async(task) => {
  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)';

  return await connection.execute(query, [title, 'pendente', dateUTC]);
};

const deleTask = async(id) => {
  return await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
};

module.exports = {
  getAll,
  createTask,
  deleTask,
};
