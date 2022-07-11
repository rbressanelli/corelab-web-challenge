import styled from "styled-components";

export const Input = styled.input`
  background-color: #83e2d1;
  filter: opacity(0.4);
  margin: 20px 0;
  width: 250px;
  padding: 15px 0 15px 50px;
  border-color: transparent;
  border-radius: 50px;
  font-size: 1.2rem;

  @media only screen and (min-width: 600px) {
    min-width: 70vw;
    max-width: 1024px;
  }

  ::placeholder {
    color: #000;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;

  @media only screen and (min-width: 600px) {
    min-width: 70vw;
    max-width: 1024px;
  }

  & > span {
    position: absolute;
    left: 20px;
    top: 40px;

    @media only screen and (min-width: 600px) {
      left: 0;
    }
  }

  & > p {
    font-size: 2.5rem;
    margin: 5px 5px 0 5px;

    & > #filter {
      cursor: pointer;
    }
  }
`;
