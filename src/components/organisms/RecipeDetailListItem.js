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
import useRecipeIngredients from "../../hooks/useRecipeIngredients";
import RichText from "../molecules/RichText";

const RecipeDetailListItem = 
({
  recipeID,   
  editedID,
  editedRecipeTitle,
  setEditedRecipeTitle,
  editedPrepTime,
  setEditedPrepTime,
  onEditClicked,
  onRemoveClicked,
  onEditSaveClicked,
  onEditCancelClicked,
  

}) => {
  recipeID = useParams();
  const recipeDetail = useRecipeDetail(recipeID);

  const {
    preparationTime,
    title,
    lastModifiedDate,
    directions,
    ingredients,
  } = recipeDetail.recipeDetail;

  const isEditActive = recipeID === editedID;
  const recipeIngredients = useRecipeIngredients();

  console.log(recipeIngredients);


  console.log((ingredients));
  

  
  const handleEditCancelClicked = id => {
    return renderNormalView();
  };

  const renderNormalView = () => {
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
            <button onClick={onEditClicked} className="editBtn">
              Upravit
            </button>
            <button onClick={onRemoveClicked} className="removeBtn">
              Smazat
            </button>
          </RecipeDetailButtons>
        </RecipeDetailHeader>
        <IngredientsItem>
          <h2>Ingrediencie:</h2>
          <table>
            <tbody></tbody>
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

  const renderEditView = () => {
    return (
      <>
        <RecipeDetailHeader>
          <input 
                  type = 'text' 
                  value={editedRecipeTitle} 
                  className='editHeaderTitle' 
                  onChange = {event => setEditedRecipeTitle(event.target.value)}
                  placeholder = {title}
                >
          </input>
          <input 
                type = 'number' 
                value={editedPrepTime} 
                className='editHeaderPrepTime' 
                onChange = {event => setEditedPrepTime(event.target.value)}
                placeholder = {preparationTime}
              >                
          </input>
          <RecipeDetailButtons>
            <button onClick={onEditSaveClicked} className="editBtn">
              Uložit
            </button>
            <button onClick={onEditCancelClicked} className="removeBtn">
              Zrušit
            </button>
          </RecipeDetailButtons>
        </RecipeDetailHeader>
        <IngredientsItem>
          <h2>Ingrediencie:</h2>
          <table>
            <tbody></tbody>
          </table>
          <p>Posledná změna:{lastModifiedDate}</p>
        </IngredientsItem>
        <DirectionsItem>
          <h2>Postup:</h2>
          <textarea id='directions' rows='20' cols='80'></textarea>
          <RichText text={directions} />
        </DirectionsItem>
      </>
    );
  };

  return(
    isEditActive ? renderEditView() : renderNormalView()  
    );
}

export default RecipeDetailListItem;
