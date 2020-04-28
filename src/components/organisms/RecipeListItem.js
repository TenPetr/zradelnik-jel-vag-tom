import React from "react";
import styled from '@emotion/styled';

const RecipeListItem = ({recipe}) => {
    const{lastModifiedDate, preparationTime, slug, title, _id} =recipe;
    return (
        // <img style={{ backgroundImage: `url(${imageUrl})` }} />
        <p>{title}</p>
        <p>{preparationTime}</p>        
    );
};