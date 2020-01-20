const express = require('express');
const projectModel = require('./project-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await projectModel.getProjects();
    res.json(projects)
  } catch(err) {
    next(err)
  };
});