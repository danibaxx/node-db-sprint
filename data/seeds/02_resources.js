
exports.seed = async (knex) => {
  await knex("resources").insert([
    {resource_name: "CEO", resource_description: "Remodeling", project_id: 1
    },
    {resource_name: "Meeting Room 1", resource_description: "Project planning", project_id:2
    },
    {resource_name: "Office-late night", resource_description: "Finalizing project", project_id:3
    },
  ]);
};