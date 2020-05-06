import React from "react";

import Heading from "../atoms/Heading";

const RecipeListItem = ({ recipe, onClickGoToRecipeDetailPage }) => {
  const { preparationTime, title, lastModifiedDate } = recipe;

  const raw = new Date(lastModifiedDate);

  const date = raw.getDate().toString();
  const month = (raw.getMonth() + 1).toString();
  const year = raw.getFullYear();
  const hours = raw.getHours();
  const minutes = raw.getMinutes();

  const formated = `${hours}:${minutes}, ${date}.${month}.${year}`;

  return (
    <div onClick={() => onClickGoToRecipeDetailPage(recipe._id)}>
      <Heading>{title}</Heading>
      <p>
        <span role="img" aria-label="clock">
          🕒
        </span>{" "}
        {preparationTime} minut
      </p>
      <p>
        <span role="img" aria-label="clock">
          🖊️
        </span>{" "}
        {formated}
      </p>
    </div>
  );
};

export default RecipeListItem;
