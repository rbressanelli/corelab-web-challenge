import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const FavoriteList = styled(CardsList)``;

export const CardContainer = styled.div`
  width: 100%;

  & > h1 {
    text-align: left;
    margin: 20px;
  }
`;
