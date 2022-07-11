import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: #f04f4f;
  color: #fff;
  max-width: 300px;  

  & > div.icons {
    text-align: right;
  }

  & > div > span {
    color: #000;
    font-size: 1.6rem;  

    :hover {
      cursor: pointer;
      filter: invert(0.6)
    }     
  } 
`;

export const VehicleDataContainer = styled.div`
  text-align: left;
  margin: 20px 0;
  width: 200px;
`