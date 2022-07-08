import { Routes, Route } from "react-router-dom";
import AddForm from "../pages/AddForm";
import VehiclesPage from "../pages/Vehicles";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<VehiclesPage />}></Route>
        <Route path="/addform" element={<AddForm />}></Route>
      </Routes>
    </>
  );
};
