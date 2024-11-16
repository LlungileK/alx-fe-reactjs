import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Determine which list to display
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes.length > 0 ? (
        displayRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes match your search.</p>
      )}
    </div>
  );
};

export default RecipeList;

