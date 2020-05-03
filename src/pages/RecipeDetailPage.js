import React from "react";
import {useParams} from 'react-router-dom'


import useRecipeDetail from '../hooks/useRecipeDetail';

const RecipeDetailPage = () => {
  const recipeID = useParams();
  const recipeDetail = useRecipeDetail(recipeID);
   console.log("recipe detail")  
   console.log(recipeDetail);

  return (
    <>    
    <p>{recipeDetail.recipeDetail.preparationTime}</p>
     <div>I am deail page</div>
    </>   
  );
};

export default RecipeDetailPage;
