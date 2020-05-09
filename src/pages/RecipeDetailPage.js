import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { RecipeDetailContainer } from "../styles/styles";
import Layout from "../components/organisms/Layout";
import RecipeDetailListItem from "../components/organisms/RecipeDetailListItem";

const RecipeDetailPage = () => {
  const recipeID = useParams();
  const [editedID, setEditedID] = useState(0);
  const [editedRecipeTitle, setEditedRecipeTitle] = useState('');
  const [editedRecipePrepTime, setEditedRecipePrepTime] = useState('');
  
  
  const url = `https://exercise.cngroup.dk/api/recipes/${recipeID.recipeID}`;
  const { push } = useHistory();



  const handleRecipeEditClicked = recipeID => {
    setEditedID(0);
  }

  const handleRemoveRecipeItem = async () => {
    try {
      const result = await axios.delete(url);
      push(`/`);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const handleEditCancelClicked = recipeID => {
    setEditedID(0);
  };

  const handleEditSaveClicked = recipeID => {
    setEditedID(0);
  };



  const showRecipeItem = () =>
    <RecipeDetailListItem
      key={recipeID}
      id={recipeID}
      editedID={editedID}
      editedRecipeTitle={editedRecipeTitle}
      editedRecipePrepTime={editedRecipePrepTime}
      onEditClicked={() => handleRecipeEditClicked(recipeID)}
      onEditSaveClicked={() => handleEditSaveClicked(recipeID)}
      onEditCancelClicked={() => handleEditCancelClicked(recipeID)}
      onRemoveClicked={() => handleRemoveRecipeItem()}
      />
  ;

  return (
    <Layout>
      <RecipeDetailContainer>
        {showRecipeItem()}        
      </RecipeDetailContainer>
    </Layout>
  );
};

export default RecipeDetailPage;
