import { DataForm } from "../../components";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useVehicle } from "../../Providers/vehicles";
import { useNavigate } from "react-router-dom";
import { RegForm } from "../../types/Vehicle";

const UpdateVehicleData = ({ dataVehicle }: any) => {
  const { updateVehicle, vehicle } = useVehicle();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().optional(),
    brand: yup.string().optional(),
    color: yup.string().optional(),
    // year: yup.number(),
    plate: yup.string().optional(),
    description: yup.string().optional(),
    price: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegForm>({ resolver: yupResolver(schema) });

  const handleForm = (data: RegForm | any) => {
    for (const key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }

    updateVehicle(data, vehicle.uuid);
    reset();
    navigate("/");
  };

  return (
    <Container>
      <DataForm        
        register={register}
        handleSubmit={handleSubmit}
        handleForm={handleForm}
        errors={errors}
      />
    </Container>
  );
};

export default UpdateVehicleData;
