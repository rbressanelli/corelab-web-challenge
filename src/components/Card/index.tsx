import React, { ReactNode } from "react";
import { VehicleData } from "../../types/Vehicle";
import { Container, VehicleDataContainer } from "./styles";
import { BsPencilSquare, BsHeart, BsX, BsSuitHeartFill } from "react-icons/bs";
import { useVehicle } from '../../Providers/vehicles'

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = ({ data }: VehicleData | any) => {

  const { deleteVehicle, updateVehicle, favorite } = useVehicle()  

  return (
    <Container>
      <div className="icons">
        <span>
          <BsPencilSquare />
        </span>
        <span id='remove'>
          <BsX onClick={() => deleteVehicle(data.uuid)} />
        </span>
        <span>
          { !data.isFavorite ?
            <BsHeart onClick={() => updateVehicle(data)}/>
            :
            <BsSuitHeartFill onClick={() => updateVehicle(data)}/>
            }
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
