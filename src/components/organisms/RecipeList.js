import React from "react";
import Box from "../atoms/Box";
import RecipeListItem from "../organisms/RecipeListItem";
import { useHistory } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  const { push } = useHistory();

  const handleGoToRecipeDetailPage = (recipeID) => push(`/detail/${recipeID}`);

  return recipes.map((recipe) => (
    <div>
      <Box key={recipe._id}>
        <RecipeListItem
          recipe={recipe}
          onClickGoToRecipeDetailPage={handleGoToRecipeDetailPage}
        />
      </Box>
    </div>
  ));
};

export default RecipeList;
