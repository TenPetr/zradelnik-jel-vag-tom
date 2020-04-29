import React from "react";
import styled from '@emotion/styled';
import Box from '../atoms/Box';
import RecipeListItem from '../organisms/RecipeListItem';
const RecipeList = ({ recipes }) => {
    return (       
        <Box></Box>         
        /*this mapping part of code i evaluate as unreachable - Vojta - nemůžu dojít na to kde je bug*/       
        // {recipes.map(({recipe}) => (
        //     <Box>
        //         <RecipeListItem recipe={recipe}/>
        //     </Box>
        // ))}
    );
};

export default RecipeList;