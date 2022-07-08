import { useEffect, useState } from "react";
import { Button, Card, Search } from "../../components";
import { IVehicle, VehicleData } from "../../types/Vehicle";
import { useVehicle } from "../../Providers/vehicles";
import { Main } from "./styles";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  const { listVehicle, vehiclesList } = useVehicle();

  useEffect(() => {
    listVehicle();
  }, []);

  return (
    <>
      
    <div>      
      <Main>
        <div>
        <Search placeholder="Buscar" value={search} onChange={() => {}} />
        {/* <span><TbAdjustmentsHorizontal /></span> */}
        </div>

        <Button text="ADICIONAR" onClick={() => {}} />

        {vehiclesList.map((vehicle: VehicleData, index: any) => (
          <Card key={index} data={vehicle}/>
        ))}        
      </Main>
    </div>
    </>
  );
};

export default VehiclesPage;
