import { useState, useEffect } from "react";

import axios from "axios";

const useRecipes = () => {
  const url = "https://exercise.cngroup.dk/api/recipes";
  const [recipes, setRecipes] = useState({ recipes: [], error: "" });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const result = await axios(url);
      setRecipes({ recipes: result.data, error: "" });
    } catch ({ message }) {
      setRecipes({ ...recipes, error: message });
    }
  };

  return recipes;
};

export default useRecipes;
