import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 90vh;
  min-width: 290px;

  & > div {
    margin: 30px 0;    
  }



  & > div > div.price {
    display: flex;
    flex-direction: column; 
    margin: 0 auto;
    max-width: 150px;
  }

  & > div > div > input#min, input#max {
    border-radius: 50px;
    padding: 10px 15px 10px;
    margin: 5px 0;
    /* direction: rtl; */
    /* width: 150px; */
    /* font-size: 1.2rem; */
  }

  & > div.price-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-width: 400px) {
    flex-direction: row;
  }
  }

  @media only screen and (min-width: 400px) {
    width: 360px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 600px) {
    width: 450px;
    /* margin: 0 auto; */
  }
`;
