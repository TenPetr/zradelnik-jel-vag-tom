import React, { useState, useEffect } from "react";

import Layout from "../components/organisms/Layout";
import RecipeList from "../components/organisms/RecipeList";

import axios from "axios";

const MainPage = () => {
  const url = "https://exercise.cngroup.dk/api/recipes";
  const [recipes, setRecipes] = useState({ recipes: [], error: "" });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const result = await axios(url);
      setRecipes({ recipes: result.data, error: "" });
      console.log(recipes);
    } catch ({ message }) {
      setRecipes({ recipes: [], error: message });
    }
  };

  return (
    <Layout></Layout>
    /*
    <Layout>
      <RecipeList recipes={recipes} />
    </Layout>
    */
  );
};

export default MainPage;
