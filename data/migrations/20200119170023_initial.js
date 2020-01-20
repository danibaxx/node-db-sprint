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
    table.string("resource_description", 255)
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("task_id")
    table.string("task_description", 128)
    table.string("task_notes", 255)
    table.boolean("task_completed").defaultTo(0).notNullable()
    table
    .integer("project_id")
    .notNullable()
    .references("id")
    .inTable("projects")
  });

  await knex.schema.createTable("projects_resources", (table) => {
    table.increments("project_resouce_id")
    table.integer("project_id")
      .notNullable()
      .references("project_id")
      .inTable("projects")
    table.integer("resource_id")
      .notNullable()
      .references("resource_id")
      .inTable("resources")
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources")
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};