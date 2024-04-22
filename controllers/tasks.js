const Tasks = require("../models/TaskSchema");

const getAllTasks = (req, res) => {
  res.status(200).send("getting all tasks");
};

const createTask = async (req, res) => {
  try {
    console.log(req.body);
    const task = await Tasks.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
