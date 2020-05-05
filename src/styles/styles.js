import styled from "@emotion/styled";

export const RecipeDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1rem;
  align-items: center;
`;

export const RecipeDetailHeader = styled.div`
  flex: 1 1 100%;
  margin-bottom: 1rem;
`;

export const IngredientsItem = styled.div`
  text-align: center;
  flex: 1 1 300px;
  display: flex;
  //padding-right: 1rem;
  box-sizing: border-box;
  flex-flow: column;
`;

export const DirectionsItem = styled.div`
  text-align: left;
  flex: 1 1 600px;
  box-sizing: border-box;
`;

export const RecipeDetailButtons = styled.div`
  flex: 1 1 100%;
  display:flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const EditBtn = styled.div`
  font-size: 1rem;
  padding: 5px;
  background-color: green;
`;

export const RemoveBtn = styled.div`
  font-size: 1rem;
  padding: 5px;
  background-color: red;
`;