import styled from "@emotion/styled";

export const RecipeDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1rem;
  align-items: center;
`;

export const RecipeDetailHeaderFooter = styled.div`
  flex: 1 1 100%;
  margin-bottom: 1rem;
`;

export const IngredientsItem = styled.div`
  text-align: center;
  flex: 1 1 300px;
  display: flex;
  //padding-right: 1rem;
  box-sizing: border-box;
`;

export const DirectionsItem = styled.div`
  text-align: left;
  flex: 1 1 600px;
  box-sizing: border-box;
`;
