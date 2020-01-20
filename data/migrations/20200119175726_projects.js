
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("project_id")
    table.string("project_name", 128).notNullable()
    table.string("project_description", 255).notNullable()
    table.boolean("project_completed").defaultTo(0).notNullable()
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("resource_id")
    table.string("resource_name", 128).notNullable().unique()
    table.string("resource_description", 255).notNullable()
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("task_id")
    table.string("task_description", 255).notNullable()
    table.string("task_notes", 255).notNullable()
    table.boolean("task_completed").defaultTo(0).notNullable()
    table.integer("project_id")
      .notNullable()
      .references("project_id")
      .inTable("projects")
  });

  await knex.schema.createTable("projects_resources", (table) => {
    table.integer("project_id")
      .notNullable()
      .references("project_id")
      .inTable("projects")
    table.integer("resource_id")
      .notNullable()
      .references("resource_id")
      .inTable("resources")
    table.primary(["project_id", "resource_id"])
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};
