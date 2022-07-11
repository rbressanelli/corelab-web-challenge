import { Routes, Route } from "react-router-dom";
import AddForm from "../pages/AddForm";
import FilterVehicles from "../pages/FilterVehicles";
import UpdateVehicleData from "../pages/UpdateVehicleData";
import VehiclesPage from "../pages/Vehicles";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<VehiclesPage />}></Route>
        <Route path="/addform" element={<AddForm />}></Route>
        <Route path="/update" element={<UpdateVehicleData />}></Route>
        <Route path="/filter" element={<FilterVehicles />}></Route>
      </Routes>
    </>
  );
};
