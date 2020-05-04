import React from "react";

const RecipeListItem = ({ recipe, onClickGoToRecipeDetailPage }) => {
  const { preparationTime, title, lastModifiedDate } = recipe;
  return (
    <div onClick={() => onClickGoToRecipeDetailPage(recipe._id)}>
      <p>{title}</p>
      <p>{preparationTime}</p>
      <p>{lastModifiedDate}</p>
    </div>
  );
};

export default RecipeListItem;
