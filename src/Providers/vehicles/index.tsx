import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react";

import api from "../../lib/api";

interface VehicleProps {
  children: ReactNode;
}

interface VehicleData {
  uuid?: string;
  name: string;
  description?: string;
  plate: string;
  isFavorite?: boolean;
  year: number;
  color: string;
  price: string;
  createdOn?: Date;
  updatedOn?: Date;
  
}

interface VehicleProviderData {
  createVehicle: (vehicleData: VehicleData) => void;
  listVehicle: () => void;
  updateVehicle: (uuid: VehicleData) => void;
  deleteVehicle: (uuid: VehicleData) => void;
  vehicle: VehicleData;
  vehiclesList: VehicleData[];
  favorite: boolean
}

const VehicleContext = createContext<VehicleProviderData>(
  {} as VehicleProviderData
);

export const VehicleProvider = ({ children }: VehicleProps) => {
  const [vehicle, setVehicle] = useState<VehicleData>({} as VehicleData);
  const [vehiclesList, setVehiclesList] = useState<VehicleData[]>(
    [] as VehicleData[]
  );
  const [favorite, setFavorite] = useState(false)

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

  const updateVehicle = useCallback ( async(data: VehicleData) => {        
    const response = await api.put(
      `/vehicles/${data.uuid}`
    ) 
  }, []);

  

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
        updateVehicle,
        deleteVehicle,
        vehicle,
        vehiclesList,
        favorite
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
