import React from "react";
import { useParams } from "react-router-dom";

import useRecipeDetail from "../hooks/useRecipeDetail";
import Layout from "../components/organisms/Layout";


const RecipeDetailPage = () => {
  const recipeID = useParams();
  const recipeDetail = useRecipeDetail(recipeID);
  console.log("recipe detail");
  console.log(recipeDetail);

  return (
    <Layout>
      <h1>{recipeDetail.recipeDetail.title}</h1>
      <p>{recipeDetail.recipeDetail.directions}</p>
      <p>{recipeDetail.recipeDetail.preparationTime}</p>
      <div>I am deail page</div>
    </Layout>
  );
};

export default RecipeDetailPage;
