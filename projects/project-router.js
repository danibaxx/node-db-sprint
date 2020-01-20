const express = require('express');
const projectModel = require('./project-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await projectModel.findProjects();
    res.json(projects)
  } catch(err) {
    next(err)
  };
});

router.post('/', async (req, res, next) => {
  try {
    const newProject = await projectModel.addProjects(req.body)
    res.status(201).json(newProject)
  } catch(err) {
    next(err)
  }
});

router.get('/:id/tasks', async (req, res, next) => {
  try {
    const { project_id } = req.params;

    const tasks = await projectModel.findTasks(project_id);
    res.json(tasks)
  } catch(err) {
    next(err)
  }
});

router.post('/tasks', async (req, res, next) => {
  try {
    const newTask = await projectModel.addTasks(req.body)
    res.status(201).json(newTask)
  } catch(err) {
    next(err)
  }
});

module.exports = router;