import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
const submitRecipe = (value) => {
  setRecipes([ ...recipes, value])
  
}
  
const deleteRecipe = (index) => {
  const updatedRecipes = [...recipes]
  updatedRecipes.splice(index, 1)
  setRecipes(updatedRecipes)
  console.log(recipes)
}

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={deleteRecipe} />
      <RecipeCreate submitRecipe={submitRecipe} />
    </div>
  );
}

export default App;
