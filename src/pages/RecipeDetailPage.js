import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import useRecipeDetail from "../hooks/useRecipeDetail";
import Layout from "../components/organisms/Layout";
import RichText from "../components/molecules/RichText";
import IngredientList from "../components/organisms/IngredientList";
const LeftTable = styled.div`
  padding-right: 16px;
  flex: 1 1 0%;
  box-sizing: border-box;
  display: block;
  width: 60%;
`;

const RecipeDetailPage = () => {
  const recipeID = useParams();
  const recipeDetail = useRecipeDetail(recipeID);
  console.log("recipe ingredients");
  console.log(recipeDetail.recipeDetail.ingredients);

  return (
    <Layout>
      <h1>{recipeDetail.recipeDetail.title}</h1>
      <p>{recipeDetail.recipeDetail.preparationTime}</p> 
      <LeftTable>
        <RichText text={recipeDetail.recipeDetail.directions} />
      </LeftTable>
      {/* <IngredientList ingredients={recipeDetail.recipeDetail.ingredients}/> */}
      
    </Layout>
  );
};

export default RecipeDetailPage;
