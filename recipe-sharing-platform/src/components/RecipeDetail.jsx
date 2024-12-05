import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-h-96 object-cover rounded-lg mb-6"
        />
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
          <p className="text-gray-700 whitespace-pre-line">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
