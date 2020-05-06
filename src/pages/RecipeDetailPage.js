import React, { useState } from "react";
import {
  RecipeDetailContainer,
} from "../styles/styles";
import Layout from "../components/organisms/Layout";
import RecipeDetailListItem from "../components/organisms/RecipeDetailListItem";

const RecipeDetailPage = () => {


  return (
    <Layout>
      <RecipeDetailContainer>
        <RecipeDetailListItem></RecipeDetailListItem>
      </RecipeDetailContainer>
    </Layout>
  );
};

export default RecipeDetailPage;
