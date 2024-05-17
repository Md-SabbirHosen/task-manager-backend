const Tasks = require("../models/TaskSchema");
const asyncWrapper = require("../middlewares/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const allTasks = await Tasks.find();
  res.status(201).json({ allTasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json(task);
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Tasks.findOne({ _id: taskId });
  if (!task)
    return res.status(404).json({ msg: `no task found with id : ${taskId}` });
  return res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Tasks.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task)
    return res.status(404).json({ msg: `no task found with id : ${taskId}` });

  return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Tasks.findOneAndDelete({ _id: taskId });
  if (!task)
    return res.status(404).json({ msg: `no task found with id : ${taskId}` });

  return res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
