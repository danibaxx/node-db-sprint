
exports.seed = async (knex) => {
  await knex("tasks").insert([
    { task_description: "Task 1 description", task_notes: "some notes..", task_completed: 0, project_id: 1
    },
    {task_description: "Task 2 description", task_notes:"write down notes..", task_completed: 0, project_id: 2
    },
    { task_description: "Task 3 description", task_notes:"show me your notes!", task_completed: 0, project_id: 3
    },
  ])
};
