import { ReactNode } from "react";
import { VehicleProvider } from "./vehicles";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <VehicleProvider>{children}</VehicleProvider>;
};

export default Providers;
