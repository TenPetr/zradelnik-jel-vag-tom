import React from "react";

import Layout from "../components/organisms/Layout";
import RecipeList from "../components/organisms/RecipeList";

import useRecipes from "../hooks/useRecipes";

const MainPage = () => {
  const recipes = useRecipes();

  return (
    <Layout>
      <RecipeList recipes={recipes.recipes} />
    </Layout>
  );
};

export default MainPage;
