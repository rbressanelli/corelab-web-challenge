import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react";
import { VehicleData } from "../../types/Vehicle";

import api from "../../lib/api";

interface VehicleProps {
  children: ReactNode;
}

interface VehicleProviderData {
  createVehicle: (vehicleData: VehicleData) => void;
  listVehicle: () => void;
  updateFavoriteVehicle: (data: VehicleData) => void;
  updateVehicle: (data: VehicleData, uuid: string | undefined) => void;
  deleteVehicle: (uuid: VehicleData) => void;
  vehicle: VehicleData;
  setVehicle: React.Dispatch<React.SetStateAction<VehicleData>>;
  vehiclesList: VehicleData[];

}

const VehicleContext = createContext<VehicleProviderData>(
  {} as VehicleProviderData
);

export const VehicleProvider = ({ children }: VehicleProps) => {
  const [vehicle, setVehicle] = useState<VehicleData>({} as VehicleData);
  const [vehiclesList, setVehiclesList] = useState<VehicleData[]>(
    [] as VehicleData[]
  );

  const createVehicle = (vehicleData: VehicleData) => {
    api
      .post("/vehicles", vehicleData)
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listVehicle = () => {
    api
      .get<VehicleData[]>("/vehicles")
      .then((response) => {
        setVehiclesList(response.data);
        
      })
      .catch((err) => console.log(err));
  };

  const updateFavoriteVehicle = useCallback ( async(data: VehicleData) => {        
    const response = await api.put(
      `/vehicles/${data.uuid}`
    ) 
  }, []);

  const updateVehicle =  ({...data}: VehicleData, uuid: any) => {    
    api
      .patch(`/vehicles/${uuid}`, {
        name: data.name,
        brand: data.brand,
        color: data.color,
        year: data.year,
        plate: data.plate,
        price: data.price,
        description: data.description,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  

  const deleteVehicle = useCallback( async(uuid: any) => {
    const response = await api.delete(
      `/vehicles/${uuid}`
    )
  }, [])
  
  
  useEffect(() => {
    listVehicle();
  }, [deleteVehicle]);

  return (
    <VehicleContext.Provider
      value={{
        createVehicle,
        listVehicle,
        updateFavoriteVehicle,
        updateVehicle,
        deleteVehicle,
        vehicle,
        setVehicle,
        vehiclesList,        
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
