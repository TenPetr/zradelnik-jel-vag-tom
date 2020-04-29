import React from "react";
import Box from "../atoms/Box";
import RecipeListItem from "../organisms/RecipeListItem";

const RecipeList = ({ recipes }) => {
  return recipes.map((recipe) => (
    <Box key={recipe._id}>
      <RecipeListItem recipe={recipe} />
    </Box>
  ));
};

export default RecipeList;
