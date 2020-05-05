import React from "react";
import { useParams } from "react-router-dom";
import {
  RecipeDetailContainer,
  RecipeDetailHeaderFooter,
  IngredientsItem,
  DirectionsItem,
} from "../styles/styles";
import useRecipeDetail from "../hooks/useRecipeDetail";
import useRecipeIngredients from "../hooks/useRecipeIngredients";
import Layout from "../components/organisms/Layout";
import RichText from "../components/molecules/RichText";

const RecipeDetailPage = () => {
  const recipeID = useParams();
  const recipeDetail = useRecipeDetail(recipeID);

  const {
    preparationTime,
    title,
    lastModifiedDate,
    directions,
    ingredients,
  } = recipeDetail.recipeDetail;
  console.log(ingredients);

  return (
    <Layout>
      <RecipeDetailContainer>
        <RecipeDetailHeaderFooter>
          <h1>{title}</h1>
          <p>
            <span role="img" aria-label="clock">
              ⏲️
            </span>
            {preparationTime} minut
          </p>
        </RecipeDetailHeaderFooter>
        <IngredientsItem>
          <h2>Ingrediencie:</h2>
        </IngredientsItem>
        <DirectionsItem>
          <h2>Postup:</h2>
          <RichText text={directions} />
        </DirectionsItem>
        <p>Posledná změna:{lastModifiedDate}</p>
      </RecipeDetailContainer>
    </Layout>
  );
};

export default RecipeDetailPage;
