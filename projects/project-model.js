const db = require('../data/db-config');

function findProjects() {
  const projects = db('projects').select()
  return projects.map(project => {
    return {
      ...project,
      project_completed: project.project_completed === 1 ? true : false
    };
  });
};

function findTasks() {
  const tasks = db('tasks').select()
  return tasks.map(task => {
    return {
      ...task,
      task_completed: task.task_completed === 1 ? true : false,
    };
  });
};

function findResources() {
  return db('resources').select()
};

function addProjects(data) {
  return db('projects').insert(data)
};

function addTasks(data) {
  return db('tasks').insert(data)
};

function addResources(data) {
  return db('resources').insert(data)
};

module.exports = {
  findProjects,
  findTasks,
  findResources,
  addProjects,
  addTasks,
  addResources
};