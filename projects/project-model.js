const db = require('../data/db-config');

function findProjects() {
  return db('projects').select()
};

function findProjectsById(project_id) {
  return db('projects')
  .where({ project_id })
  .first()
};

async function addProjects(data) {
  const [project_id] = await db('projects').insert(data)
  return db('projects')
    .where({ project_id })
    .first()
};


module.exports = {
  // addResources,
  // findResources,
  addProjects,
  findProjects,
  findProjectsById,
};