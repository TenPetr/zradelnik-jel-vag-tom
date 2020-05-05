import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import useRecipeDetail from "../hooks/useRecipeDetail";
import useRecipeIngredients from "../hooks/useRecipeIngredients";
import Layout from "../components/organisms/Layout";
import RichText from "../components/molecules/RichText";



const RecipeDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1rem;
  align-items: center;
  
`;

const RecipeDetailHeaderFooter = styled.div`
  flex: 1 1 100%;
  margin-bottom: 1rem;
`;

const IngredientsItem = styled.div`
  text-align: center;
  flex: 1 1 300px;
  display: flex;
  //padding-right: 1rem;
  box-sizing: border-box;
`;


const DirectionsItem = styled.div`
  text-align: left;
  flex: 1 1 600px;
  box-sizing: border-box;
`;


const RecipeDetailPage = () => {
  const recipeID = useParams();
  const recipeDetail = useRecipeDetail(recipeID);

  

  const {preparationTime, title, lastModifiedDate, directions,ingredients} = recipeDetail.recipeDetail;
  console.log(ingredients);

  return (
    <Layout>
      <RecipeDetailContainer>
        <RecipeDetailHeaderFooter>
          <h1>{title}</h1>
          <p>⏲️{preparationTime} minut</p>
        </RecipeDetailHeaderFooter>
        <IngredientsItem>
          <h2>Ingrediencie:</h2>
          <p>{}</p>
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
