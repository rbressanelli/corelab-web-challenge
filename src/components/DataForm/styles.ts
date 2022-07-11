import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 90vh;
  
  @media only screen and (min-width: 400px) {
    width: 360px;
    margin: 0 auto;
  }

  & > input {
    border-radius: 50px;
    padding: 10px 20px;

    ::placeholder {
        
    }
  }

  & > label {
    margin-top: 5px;
    padding-left: 20px;
  }

  & > div {
    margin-top: 5px;    
    text-align: right;
  }

  & > p {
    font-size: 0.8rem;
  }
`;