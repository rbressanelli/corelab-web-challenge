import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
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
  setVehicle: Dispatch<SetStateAction<VehicleData>>;
  vehiclesList: VehicleData[];
  setBrand: Dispatch<SetStateAction<undefined>>;
  setColor: Dispatch<SetStateAction<undefined>>;
  setYear: Dispatch<SetStateAction<undefined>>;
  setMinValue: Dispatch<SetStateAction<undefined>>;
  setMaxValue: Dispatch<SetStateAction<undefined>>;
  minValue: number | undefined;
  maxValue: number | undefined;
  brand: string | undefined;
  color: string | undefined;
  year: number | undefined;
}

const VehicleContext = createContext<VehicleProviderData>(
  {} as VehicleProviderData
);

export const VehicleProvider = ({ children }: VehicleProps) => {
  const [vehicle, setVehicle] = useState<VehicleData>({} as VehicleData);
  const [vehiclesList, setVehiclesList] = useState<VehicleData[]>(
    [] as VehicleData[]
  );
  const [checkMove, setCheckMove] = useState<Boolean>(false);
  const [brand, setBrand] = useState();
  const [color, setColor] = useState();
  const [year, setYear] = useState();
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

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

  const updateFavoriteVehicle = useCallback(
    async (data: VehicleData) => {
      const response = await api.put(`/vehicles/${data.uuid}`);
      console.log(data);
      setCheckMove(!checkMove);
    },
    [checkMove]
  );

  const updateVehicle = ({ ...data }: VehicleData, uuid: any) => {
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
      .then((response) => setCheckMove(!checkMove))
      .catch((err) => console.log(err));
  };

  const deleteVehicle = useCallback(
    async (uuid: any) => {
      const response = await api.delete(`/vehicles/${uuid}`);
      setCheckMove(!checkMove);
    },
    [checkMove]
  );

  useEffect(() => {
    listVehicle();
  }, [checkMove]);

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
        brand,
        color,
        year,
        setBrand,
        setColor,
        setYear,
        maxValue,
        minValue,
        setMaxValue,
        setMinValue,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
