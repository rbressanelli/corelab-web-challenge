import { useEffect, useState } from "react";
import { Button, Card, Search } from "../../components";
import { IVehicle, VehicleData } from "../../types/Vehicle";
import { useVehicle } from "../../Providers/vehicles";
import { CardContainer, CardsList, FavoriteList, Main } from "./styles";
import { useNavigate } from "react-router-dom";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const { listVehicle, vehiclesList, brand, color, year, minValue, maxValue } =
    useVehicle();
  console.log(search);
  useEffect(() => {
    listVehicle();
  }, [search]);

  return (
    <>
      <div>
        <Main>
          <div>
            <Search
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Button text="ADICIONAR" onClick={() => navigate("/addform")} />

          <CardContainer>
            <h1>Favoritos</h1>
            <FavoriteList>
              {vehiclesList[0] && (
                <>
                  {vehiclesList
                    .filter((vehicle: VehicleData) => vehicle.isFavorite)
                    .map((vehicle: VehicleData, index: number) => (
                      <Card key={index} data={vehicle} />
                    ))}
                </>
              )}
            </FavoriteList>
          </CardContainer>

          <CardContainer>
            <h1>Anúncios</h1>
            <CardsList>
              {vehiclesList[0] && (
                <>
                  {vehiclesList
                    .filter(
                      (vehicle: VehicleData) =>
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        !vehicle.isFavorite
                    )
                    .filter((vehicle: VehicleData) =>
                      search ? Object.values(vehicle).includes(search) : true
                    )
                    .filter((value) => (brand ? value.name === brand : true))
                    .filter((value) => (color ? value.color === color : true))
                    .filter((value) => (year ? value.year === year : true))
                    .map((vehicle: VehicleData, index: number) => (
                      <Card key={index} data={vehicle} />
                    ))}
                </>
              )}
            </CardsList>
          </CardContainer>
        </Main>
      </div>
    </>
  );
};

export default VehiclesPage;
