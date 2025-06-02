import React, { useState } from "react";

interface Recipe {
  name: string;
  description: string;
}

export default function AddRecipe() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleAddRecipe = () => {
    if (!name.trim() || !description.trim()) return;

    const newRecipe: Recipe = { name, description };
    setRecipes([...recipes, newRecipe]);
    setName("");
    setDescription("");
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "500px", margin: "auto" }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={handleAddRecipe} style={{ padding: "10px 20px" }}>
        Add Recipe
      </button>

      <h3 style={{ marginTop: "2rem" }}>Recipe List</h3>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <strong>{recipe.name}</strong>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
