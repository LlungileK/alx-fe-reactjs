import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Array of all recipes
  searchTerm: '', // Search term for filtering
  filteredRecipes: [], // Array of filtered recipes

  // Action to set the search term and filter recipes
  setSearchTerm: (term) =>
    set((state) => {
      const lowerCaseTerm = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) => {
          const matchesTitle = recipe.title.toLowerCase().includes(lowerCaseTerm);
          const matchesIngredients =
            Array.isArray(recipe.ingredients) &&
            recipe.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(lowerCaseTerm)
            );
          return matchesTitle || matchesIngredients;
        }),
      };
    }),

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const updatedFilteredRecipes = state.searchTerm
        ? updatedRecipes.filter((recipe) => {
            const lowerCaseTerm = state.searchTerm.toLowerCase();
            const matchesTitle = recipe.title.toLowerCase().includes(lowerCaseTerm);
            const matchesIngredients =
              Array.isArray(recipe.ingredients) &&
              recipe.ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(lowerCaseTerm)
              );
            return matchesTitle || matchesIngredients;
          })
        : updatedRecipes;

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFilteredRecipes,
      };
    }),
}));

export default useRecipeStore;


