exports.seed = function (knex) {
  const recipes = [
    {
      recipe_name: "Twice Baked Potatoes",
    },
    {
      recipe_name: "Beef Lasagna",
    },
    {
      recipe_name: "Chicken Parm",
    },
  ];
  return knex("recipes").insert(recipes);
};
