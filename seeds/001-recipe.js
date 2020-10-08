exports.seed = function (knex) {
  const recipes = [
    {
      name: "Twice Baked Potatoes",
    },
    {
      name: "Beef Lasagna",
    },
    {
      name: "Chicken Parm",
    },
  ];
  return knex("recipes").insert(recipes);
};
