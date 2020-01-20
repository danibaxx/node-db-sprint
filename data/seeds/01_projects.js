
exports.seed = async (knex) => {
  await knex("projects").insert([
    { name: "Project 1", description: "Project 1 description", completed: 0
    },
    { name: "Project 2", description: "Project 2 description", completed: 0
    },
    { name: "Project 3", description: "Project 3 description", completed: 0
    },
  ])
};
