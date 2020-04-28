import React from "react";
import styled from '@emotion/styled';
import Box from '../components/atoms/Box';
import RecipeListItem from '../components/organisms/RecipeListItem';
const RecipeList = ({ recipes }) => {
    return (
        recipes.map(({ recipe }) => (
            <Box>
                <RecipeListItem recipe={recipe}/>
            </Box>
        ))
    );
};

export default RecipeList;