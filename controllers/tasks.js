const getAllTasks = (req, res) => {
  res.status(200).send("getting all tasks");
};

const createTask = (req, res) => {
  res.status(200).send("create a task");
};
const getSingleTask = (req, res) => {
  res.status(200).send("get single task");
};
const updateTask = (req, res) => {
  res.status(200).send("update a task");
};
const deleteTask = (req, res) => {
  res.status(200).send("delete a task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
