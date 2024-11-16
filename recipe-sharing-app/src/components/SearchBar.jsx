import React from 'react';
import useRecipeStore from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default SearchBar;
