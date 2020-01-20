const db = require('../data/db-config');

function findProjects() {
  return db('projects').select()
};

async function addProjects(data) {
  const [id] = await db('projects').insert(data)
  return db('projects')
    .where({ id })
    .first()
};






module.exports = {
  // addResources,
  // findResources,
  addProjects,
  findProjects,
  // addTasks,
  // findTasks, // include project_name/description
};