import React, { useState } from "react";
import "./App.css";
function RecipeCreate({submitRecipe}) {

  const initialFormState ={
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  }
  const [formData, setFormData] = useState({...initialFormState})
   const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
      
    })
    
  }
   
   const handleSubmit = (event) => {
     event.preventDefault()
     submitRecipe(formData)
     setFormData({...initialFormState})
     
   }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
            <input 
              type="text"
              id="name"
              name="name"
              onChange="handleChange"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              />
            </td>
             <td>
            <input 
              type="text"
              id="cuisine"
              name="cuisine"
              onChange="handleChange"
              value={formData.cuisine}
              onChange={handleChange}
              placeholder="Cuisine"
              />
            </td>
             <td>
            <input 
              type="url"
              id="photo"
              name="photo"
              onChange="handleChange"
              value={formData.photo}
              onChange={handleChange}
              placeholder="URL"
              />
            </td>
            <td>
            <textarea 
              id="ingredients"
              name="ingredients"
              onChange="handleChange"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Ingredients"
              />
            </td>
              <td>
            <textarea 
              id="preparation"
              name="preparation"
              onChange="handleChange"
              value={formData.preparation}
              onChange={handleChange}
              placeholder="preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
