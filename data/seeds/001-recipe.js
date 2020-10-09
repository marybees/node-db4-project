exports.seed = function (knex) {
  return knex("recipes")
    .truncate()
    .then(function () {
      return knex("recipes").insert([
        {
          id: 1,
          recipe_name: "Twice Baked Potatoes",
        },
        {
          id: 2,
          recipe_name: "Beef Lasagna",
        },
        {
          id: 3,
          recipe_name: "Chicken Parm",
        },
      ]);
    });
};
