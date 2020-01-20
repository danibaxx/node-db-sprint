const db = require('../data/db-config');

function findProjects() {
  return db('projects').select()
};

async function addProjects(data) {
  const [project_id] = await db('projects').insert(data)
  return db('projects')
    .where({ project_id })
    .first()
};

function findTasks(project_id) {
  return db('tasks as t')
    .join(
      'projects as p', 
      't.project_id', 
      'p.id'
    )
    .where({ project_id })
    .select(
      't.id', 
      't.project_id', 
      't.task_description', 
      't.task_notes', 
      't.task_completed', 
      'p.project_name'
    )
    .first()
}






module.exports = {
  // addResources,
  // findResources,
  addProjects,
  findProjects,
  // addTasks,
  findTasks, // include project_name/description
};