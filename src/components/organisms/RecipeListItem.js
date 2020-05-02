import React from "react";

const RecipeListItem = ({ recipe, detail }) => {
  const { preparationTime, title, lastModifiedDate } = recipe;
  return (
    <div onClick={() => detail(recipe._id)}>
      <p>{title}</p>
      <p>{preparationTime}</p>
      <p>{lastModifiedDate}</p>
    </div>
  );
};

export default RecipeListItem;
