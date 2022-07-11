import React, { ReactNode } from "react";
import { VehicleData } from "../../types/Vehicle";
import { Container, VehicleDataContainer } from "./styles";
import { BsPencilSquare, BsHeart, BsX, BsSuitHeartFill } from "react-icons/bs";
import { useVehicle } from "../../Providers/vehicles";
import { useNavigate } from "react-router-dom";

const Card = ({ data }: VehicleData | any) => {
  const navigate = useNavigate();

  const { deleteVehicle, updateFavoriteVehicle, setVehicle } = useVehicle();

  return (
    <Container>
      <div className="icons">
        <span>
          <BsPencilSquare
            onClick={() => {
              setVehicle(data);
              navigate("/update");
            }}
          />
        </span>
        <span id="remove">
          <BsX onClick={() => deleteVehicle(data.uuid)} />
        </span>
        <span>
          {!data.isFavorite ? (
            <BsHeart onClick={() => updateFavoriteVehicle(data)} />
          ) : (
            <BsSuitHeartFill onClick={() => updateFavoriteVehicle(data)} />
          )}
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
