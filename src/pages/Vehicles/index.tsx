import { useEffect, useState } from "react";
import { Button, Card, Search } from "../../components";
import { IVehicle, VehicleData } from "../../types/Vehicle";
import { useVehicle } from "../../Providers/vehicles";
import { Main } from "./styles";
import { useNavigate } from 'react-router-dom';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate()

  const { listVehicle, vehiclesList } = useVehicle();

  useEffect(() => {
    listVehicle();
  });

  
  return (
    <>
      
    <div>      
      <Main>
        <div>
        <Search placeholder="Buscar" value={search} onChange={(e) => setSearch(e.target.value) } />
        {/* <span><TbAdjustmentsHorizontal /></span> */}
        </div>

        <Button text="ADICIONAR" onClick={() => navigate('/addform')} />

        {vehiclesList.map((vehicle: VehicleData, index: number) => (
          <Card key={index} data={vehicle} />
        ))}        
      </Main>
    </div>
    </>
  );
};

export default VehiclesPage;
