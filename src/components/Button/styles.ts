import styled from "styled-components";

export const AddButton = styled.button`
  position: relative;
  background-color: #83e2d1;
  margin: 5px 0;
  padding: 15px;
  border-color: transparent;
  border-radius: 50px;
  font-size: 1.2rem;
  width: 250px;

  & > span {
    position: absolute;
    left: 20px;

    @media only screen and (min-width: 600px) {
      display: none;
    }
  }
`;
