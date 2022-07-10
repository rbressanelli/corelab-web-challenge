import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DataForm } from "../../components";
import { useVehicle } from "../../Providers/vehicles";
import { useNavigate } from "react-router-dom";
import { RegForm } from "../../types/Vehicle";

const AddForm = () => {
  const { createVehicle } = useVehicle();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    brand: yup.string().required("Campo obrigatório!"),
    color: yup.string().required("Campo obrigatório!"),
    year: yup
      .number()
      .typeError("Informar um valor numérico!")
      .required("Campo obrigatório!"),
    plate: yup.string().required("Campo obrigatório!"),
    description: yup.string().required("Campo obrigatório!"),
    price: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegForm>({ resolver: yupResolver(schema) });

  const handleForm = (data: RegForm) => {
    createVehicle(data);
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

export default AddForm;
