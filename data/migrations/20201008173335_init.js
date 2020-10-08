exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name").notNullable().unique();
    })
    .createTable("ingredient", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name").notNullable().unique();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipe")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.integer("quantity");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe")
    .dropTableIfExists("ingredient");
};
