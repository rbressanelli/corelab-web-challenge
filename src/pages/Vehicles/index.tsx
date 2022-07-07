import { useEffect, useState } from "react";
import { Button, Card, Search } from "../../components";
import { IVehicle } from "../../types/Vehicle";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  // useEffect(() => {
  //   const fetchVehicles = async () => {
  //     const payload = await getVehicles();
  //     setVehicles(payload);
  //   };

  //   fetchVehicles();
  // }, []);

  console.log({ vehicles });

  return (
    <div>
      <main>
        <Search placeholder="Search" value={search} onChange={() => {}} />

        <Button text="Add new vehicle" onClick={() => {}} />

        <Card title="Sandero Stepway">
          <p>Price: 22000</p>
          <p>Description: Carro usado por 2 anos...</p>
          <p>Year: 2018</p>
        </Card>
      </main>
    </div>
  );
};

export default VehiclesPage;
