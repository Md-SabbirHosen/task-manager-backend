const Tasks = require("../models/TaskSchema");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Tasks.find();
    res.status(201).json({ allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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

const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Tasks.findOne({ _id: taskId });
    if (!task)
      return res.status(404).json({ msg: `no task found with id : ${taskId}` });

    return res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await Tasks.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task)
      return res.status(404).json({ msg: `no task found with id : ${taskId}` });

    return res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Tasks.findOneAndDelete({ _id: taskId });
    if (!task)
      return res.status(404).json({ msg: `no task found with id : ${taskId}` });

    return res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
