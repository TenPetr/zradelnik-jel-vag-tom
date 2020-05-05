import React from "react";
import { useParams } from "react-router-dom";

import "./RecipeDetailListItem.css";
import {
    RecipeDetailHeader,
    RecipeDetailButtons,
    IngredientsItem,
    DirectionsItem,
  } from "../../styles/styles";
import useRecipeDetail from "../../hooks/useRecipeDetail";
import RichText from "../molecules/RichText";

const RecipeDetailListItem = ({onEditClicked,onRemoveClicked}) => {

    const recipeID = useParams();
    const recipeDetail = useRecipeDetail(recipeID);
    
    const {
        preparationTime,
        title,
        lastModifiedDate,
        directions,
        ingredients,
    } = recipeDetail.recipeDetail;

    return (
        <>
        <RecipeDetailHeader>
          <h1>{title}</h1>
          <p>
            <span role="img" aria-label="clock">
              ⏲️
            </span>
            {preparationTime} minut
          </p>
          <RecipeDetailButtons>
          <button onClick={onEditClicked} className='editBtn'>Upravit</button>
          <button onClick={onRemoveClicked} className='removeBtn'>Smazat</button>  
        </RecipeDetailButtons> 
        </RecipeDetailHeader>
        <IngredientsItem>
          <h2>Ingrediencie:</h2>
          <table>
            <tbody>
            </tbody>
          </table>
          <p>Posledná změna:{lastModifiedDate}</p>
        </IngredientsItem>
        <DirectionsItem>
          <h2>Postup:</h2>
          <RichText text={directions} />
        </DirectionsItem>
      </>
    );


};

export default RecipeDetailListItem;
