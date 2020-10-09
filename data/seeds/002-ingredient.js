exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        {
          id: 1,
          ingredient_name: "1lb of chicken",
          recipe_id: 3,
          quantity: 2,
        },
        {
          id: 2,
          ingredient_name: "bag of shredded mozzerella cheese",
          recipe_id: 1,
          quantity: 1,
        },
        {
          id: 3,
          ingredient_name: "bag of shredded mozzerella cheese",
          recipe_id: 2,
          quantity: 2,
        },
        {
          id: 4,
          ingredient_name: "bag of shredded mozzerella cheese",
          recipe_id: 3,
          quantity: 2,
        },
        {
          id: 5,
          ingredient_name: "jar of tomato sauce",
          recipe_id: 2,
          quantity: 2,
        },
        {
          id: 6,
          ingredient_name: "jar of tomato sauce",
          recipe_id: 3,
          quantity: 3,
        },
        {
          id: 7,
          ingredient_name: "large yellow onion",
          recipe_id: 2,
          quantity: 1,
        },
        {
          id: 8,
          ingredient_name: "container of breadcrumbs",
          recipe_id: 3,
          quantity: 1,
        },
        {
          id: 9,
          ingredient_name: "1lb of beef",
          recipe_id: 2,
          quantity: 2,
        },
        {
          id: 10,
          ingredient_name: "bacon strip",
          recipe_id: 1,
          quantity: 4,
        },
      ]);
    });
};
