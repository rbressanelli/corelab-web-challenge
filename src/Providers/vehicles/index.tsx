import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { useHistory } from "react-router-dom";
import { History } from "history";
import api from "../../lib/api";

interface VehicleProps {
  children: ReactNode;
}

interface VehicleData {
  uuid?: string;
  name: string;
  description: string;
  plate: string;
  isFavorite: boolean;
  year: number;
  color: string;
  price: number;
  createdOn?: Date;
  updatedOn?: Date;
}

interface VehicleProviderData {
  createVehicle: (vehicleData: VehicleData) => void;
  listVehicle: () => void;
  updateVehicle: (uuid: VehicleData, vehivleData: VehicleData) => void;
  deleteVehicle: (uuid: VehicleData) => void;
  vehicle: VehicleData;
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

  const updateVehicle = () => {};

  const deleteVehicle = () => {};

  useEffect(() => {
    listVehicle();
  }, []);

  return (
    <VehicleContext.Provider
      value={{
        createVehicle,
        listVehicle,
        updateVehicle,
        deleteVehicle,
        vehicle,
        vehiclesList,

      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
