import React from "react";

function RecipeList({recipes, handleDelete}) {
  
  const recipeList = recipes.map((recipe, index) =>{
    console.log(index)
    return(
    <tr key={index}>
    <td>{recipe.name}</td>
    <td>{recipe.cuisine}</td>
    <td><img src={recipe.photo}/></td>
    <td className="content_td"><p>{(recipe.ingredients)}</p></td>
    <td className="content_td"><p>{(recipe.preparation)}</p></td>
    <td ><button onClick={() => handleDelete(index)} name="delete">Delete </button> </td>
    </tr>
    )
  })
 
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <div className="container" >
      <table> 
        
        <thead> 
         
          <tr>
            <th style={{width:"10%"}}>Name</th>
            <th style={{width:"10%"}}>Cuisine</th>
            <th style={{width:"10%"}}>Photo</th>
            <th style={{width:"30%"}}>Ingredients</th>
            <th style={{width:"30%"}}>Preparation</th>
            <th style={{width:"10%"}}>Actions</th>
          </tr> 
        </thead>
        
        <tbody>
          {recipeList}
        </tbody>
      
      </table> 
      </div>
    </div>
  );
}

export default RecipeList;
