import React from "react";
import styled from '@emotion/styled';
import Box from '../atoms/Box';
import RecipeListItem from '../organisms/RecipeListItem';
const RecipeList = ({ recipes }) => {
    return (
        <Box></Box>        
        {recipes.map(({recipe}) => (
            <Box>
                <RecipeListItem recipe={recipe}/>
            </Box>
        ))}
    );
};

export default RecipeList;