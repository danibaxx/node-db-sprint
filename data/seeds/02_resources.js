
exports.seed = async (knex) => {
  await knex("resources").insert([
    {resource_name: "SR Web Dev Office", resource_description: "Remodeling project outline"
    },
    {resource_name: "Meeting Room 1", resource_description: "API Project planning"
    },
    {resource_name: "Office-late night", resource_description: "Finalizing Redux project"
    },
  ]);
};