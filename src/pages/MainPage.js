import React from "react";

import Layout from '../components/organisms/Layout';
import Button from '../components/atoms/Button';
import Box from '../components/atoms/Box';
import RecipeList from '../components/organisms/RecipeList';
import recipes from '../mocks/recipes.json'

const MainPage = () => {
  

  return (
    <Layout>
       <div>Main Page</div>       
       <Box>
         nejaky text
       </Box>
       <RecipeList recipes={recipes}/>       
    </Layout>   
    );
};

export default MainPage;
