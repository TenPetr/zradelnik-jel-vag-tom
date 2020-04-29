import React from "react";

const RecipeListItem = ({ recipe }) => {
  const { preparationTime, title, lastModifiedDate } = recipe;
  return (
    <div>
      <p>{title}</p>
      <p>{preparationTime}</p>
      <p>{lastModifiedDate}</p>
    </div>
  );
};

export default RecipeListItem;
