import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const { recipes, updateRecipe } = useRecipeStore((state) => ({
    recipes: state.recipes,
    updateRecipe: state.updateRecipe,
  }));

  // Find the recipe to edit
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!title.trim() || !description.trim()) {
      alert('Title and Description cannot be empty!');
      return;
    }

    updateRecipe(recipeId, { title, description });
    alert('Recipe updated successfully!');
  };

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;

