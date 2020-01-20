const db = require('../data/db-config');

function findProjects() {
  return db('projects').select()
};

function findTasks() {
  return db('tasks').select()
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