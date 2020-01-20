const db = require('../data/db-config');

function findTasks(project_id) {
  return db('tasks as t')
    .join(
      'projects as p', 
      'p.project_id', 
      't.project_id'
    )
    .where({ project_id })
    .select( 
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
};

module.exports = {
  findTasks,
  addTasks,
};