import React, { ReactNode } from "react";
import { VehicleData } from "../../types/Vehicle";
import { Container, VehicleDataContainer } from "./styles";
import { BsPencilSquare, BsHeart, BsX } from "react-icons/bs";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = ({ data }: VehicleData | any) => {
  return (
    <Container>
      <div className="icons">
        <span>
          <BsPencilSquare />
        </span>
        <span id='remove'>
          <BsX />
        </span>
        <span>
          <BsHeart />
        </span>
      </div>
      <VehicleDataContainer>
        <p>{data.name}</p>
        <p>Preço: {data.price}</p>
        <p>Descrição: {data.description}</p>
        <p>Ano: {data.year}</p>
        <p>Cor: {data.color}</p>
      </VehicleDataContainer>
    </Container>
  );
};

export default Card;
