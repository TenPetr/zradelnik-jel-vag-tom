import React from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { RecipeDetailContainer } from "../styles/styles";
import Layout from "../components/organisms/Layout";
import RecipeDetailListItem from "../components/organisms/RecipeDetailListItem";

const RecipeDetailPage = () => {
  const recipeID = useParams();

  const url = `https://exercise.cngroup.dk/api/recipes/${recipeID.recipeID}`;
  const { push } = useHistory();

  const removeItem = async () => {
    try {
      const result = await axios.delete(url);
      push(`/`);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <Layout>
      <RecipeDetailContainer>
        <RecipeDetailListItem
          onRemoveClicked={() => removeItem()}
        ></RecipeDetailListItem>
      </RecipeDetailContainer>
    </Layout>
  );
};

export default RecipeDetailPage;
