import styled from "styled-components";

export const AddButton = styled.button`
    position: relative;
    background-color: #83e2d1;
    margin: 20px 0;
    padding: 15px;
    border-color: transparent;
    border-radius: 50px;
    font-size: 1.2rem;
    max-width: 320px;

    & > span {
        position: absolute;
        left: 20px;
    }
`;