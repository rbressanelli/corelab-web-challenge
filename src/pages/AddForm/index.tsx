import { Container, Form } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components";
import { useVehicle } from '../../Providers/vehicles'
import { useNavigate } from 'react-router-dom';

interface RegForm {
  name: string;
  brand: string;
  color: string;
  year: number;
  plate: string;
  price: string; 
  description: string; 
}

const AddForm = () => {

  const { createVehicle } = useVehicle();
  const navigate = useNavigate()

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    brand: yup.string().required("Campo obrigatório!"),
    color: yup.string().required("Campo obrigatório!"),
    year: yup.number().typeError('Informar um valor numérico!').required("Campo obrigatório!"),
    plate: yup.string().required("Campo obrigatório!"),
    description: yup.string().required("Campo obrigatório!"),
    price: yup.string().required('Campo obrigatório!')
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
    navigate('/')

  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="name">Nome:</label>
        <input id="name" placeholder={"Nome"} {...register("name")} />
        <p>{errors.name?.message}</p>

        <label htmlFor="brand">Marca:</label>
        <input id="brand" placeholder={"Marca"} {...register("brand")} />
        <p>{errors.brand?.message}</p>

        <label htmlFor="color">Cor:</label>
        <input id="color" placeholder={"Cor"} {...register("color")} />
        <p>{errors.color?.message}</p>

        <label htmlFor="year">Ano:</label>
        <input type="number" id="year" placeholder={"Ano"} {...register("year")} />
        <p>{errors.year?.message}</p>

        <label htmlFor="plate">Placa:</label>
        <input id="plate" placeholder={"Placa"} {...register("plate")} />
        <p>{errors.plate?.message}</p>

        <label htmlFor="price">Preço:</label>
        <input id="price" placeholder={"Placa"} {...register("price")} />
        <p>{errors.price?.message}</p>

        <label htmlFor="description">Descrição:</label>
        <input id="description" placeholder={"Descrição"} {...register("description")} />
        <p>{errors.description?.message}</p>
        
        <div>
          <Button type="submit" text="SALVAR" />
        </div>
        {/* <button type="submit">SALVAR</button> */}
      </Form>
    </Container>
  );
};

export default AddForm;
