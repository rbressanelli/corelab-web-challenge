import { useEffect, useState } from "react";
import { Button, Card, Search } from "../../components";
import { IVehicle, VehicleData } from "../../types/Vehicle";
import { useVehicle } from "../../Providers/vehicles";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  const { listVehicle, vehiclesList } = useVehicle();

  useEffect(() => {
    listVehicle();
  }, []);

  // console.log(vehiclesList[0]);

  return (
    <div>
      <main>
        <Search placeholder="Search" value={search} onChange={() => {}} />

        <Button text="Add new vehicle" onClick={() => {}} />

        {vehiclesList.map((vehicle: VehicleData, index: any) => (
          <Card key={index} data={vehicle}/>
        ))}
        
      </main>
    </div>
  );
};

export default VehiclesPage;
