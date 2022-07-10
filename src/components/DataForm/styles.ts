import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background-color: #f9f9f9;
  min-height: 90vh;

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
    margin-top: 10px;    
    text-align: right;
  }

  & > p {
    font-size: 0.8rem;
  }
`;