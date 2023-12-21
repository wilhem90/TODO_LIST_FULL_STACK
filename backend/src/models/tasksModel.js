const connection = require('./conection');
const getAll = async() => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const getTask = async(id) => {
  const [task] = await connection.execute('SELECT * FROM tasks WHERE id = ?', [id]);
  return task;
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

const updateTask = async(id, task) => {
  const { title, status } = task;
  const query = 'UPDATE tasks SET title= ?, status = ? WHERE id = ?';

  const [updatedTask] =  await connection.execute(query, [title, status, id]);

  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleTask,
  updateTask,
  getTask,
};
