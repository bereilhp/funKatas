const bake = {
    cake: function (recipe, ingredients) {
        let valueRecipe = Object.entries(recipe);
        let valueIngredients = Object.entries(ingredients);

        if (JSON.stringify(valueIngredients) == JSON.stringify(valueRecipe)) {
            return 1;
        } else
            return 0;
    }
};

module.exports = bake;