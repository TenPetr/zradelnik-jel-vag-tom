import { useState, useEffect } from "react";

import axios from "axios";

const useRecipeDetail = ({ recipeID }) => {
  const url = `https://exercise.cngroup.dk/api/recipes/${recipeID}`;//5bf6cbef6ac34b001baef483
  const [recipeDetail, setRecipeDetail] = useState({
    recipeDetail: [],
    error: "",
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const result = await axios(url);
      setRecipeDetail({
        recipeDetail: result.data,
        error: "",
      });
    } catch ({ message }) {
      setRecipeDetail({
        ...recipeDetail,
        error: message,
      });
    }
  };

  return recipeDetail;
};

export default useRecipeDetail;
