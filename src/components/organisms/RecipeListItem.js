import React from "react";

const RecipeListItem = ({ recipe }) => {
  const { preparationTime, title } = recipe;
  return (
    <div>
      <p>{title}</p>
      <p>{preparationTime}</p>
    </div>
  );
};

export default RecipeListItem;
