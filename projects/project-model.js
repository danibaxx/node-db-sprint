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


function findTasks(project_id) {
  return db('projects as p')
    .join(
      'tasks as t', 
      't.task_id', 
      't.project_id'
    )
    .where({ project_id })
    .select( 
      't.project_id', 
      't.task_description', 
      't.task_notes', 
      't.task_completed', 
      'p.project_name',
      'p.project_description'
    )
};

async function addTasks(data) {
  const [task_id] = await db('tasks').insert(data)
  return db('tasks')
    .where({ task_id })
    .first()
}





module.exports = {
  // addResources,
  // findResources,
  addProjects,
  findProjects,
  findProjectsById,
  addTasks,
  findTasks, // include project_name/description
};