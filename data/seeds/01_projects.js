
exports.seed = async (knex) => {
  await knex("projects").insert([
    { project_name: "Project 1", project_description: "Project 1 description", project_completed: false,
    },
    { project_name: "Project 2", project_description: "Project 2 description", project_completed: false,
    },
    { project_name: "Project 3", project_description: "Project 3 description", project_completed: false,
    },
  ])
};
