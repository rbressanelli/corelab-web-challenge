import styled from "styled-components";

export const Input = styled.input`
  background-color: #83e2d1;
  filter: opacity(0.4);
  margin: 20px 0;
  padding: 15px 0 15px 50px;
  border-color: transparent;
  border-radius: 50px;
  font-size: 1.2rem;

  ::placeholder {
    color: #000;
  }
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    max-width: 320px;

    & > span {
        position: absolute;
        left: 20px;
        top: 40px;
    }

    & > p {
        font-size: 2.5rem;
        margin: 5px 5px 0 5px;
    }
`;
