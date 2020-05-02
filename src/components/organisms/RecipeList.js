import React from "react";
import Box from "../atoms/Box";
import RecipeListItem from "../organisms/RecipeListItem";
import { useHistory } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  const { push } = useHistory();

  // const handleGoToRecipeDetailPage = recipeID => push(`/recipes/${recipeID}`);
  const handleGoToRecipeDetailPage = (recipeID) => {
    console.log(`card with ${recipeID} was clicked`);
  };

  return recipes.map((recipe) => (
    <Box key={recipe._id}>
      <RecipeListItem recipe={recipe} detail={handleGoToRecipeDetailPage} />
    </Box>
  ));
};

export default RecipeList;
