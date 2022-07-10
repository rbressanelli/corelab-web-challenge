import Button from "../Button";
import { Form } from "./styles";

const DataForm = ({ handleSubmit, register, errors, handleForm }: any) => {
  return (
    <>
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
        <input
          type="number"
          id="year"
          placeholder={"Ano"}
          {...register("year")}
        />
        <p>{errors.year?.message}</p>

        <label htmlFor="plate">Placa:</label>
        <input id="plate" placeholder={"Placa"} {...register("plate")} />
        <p>{errors.plate?.message}</p>

        <label htmlFor="price">Preço:</label>
        <input id="price" placeholder={"Placa"} {...register("price")} />
        <p>{errors.price?.message}</p>

        <label htmlFor="description">Descrição:</label>
        <input
          id="description"
          placeholder={"Descrição"}
          {...register("description")}
        />
        <p>{errors.description?.message}</p>

        <div>
          <Button type="submit" text="SALVAR" />
        </div>
      </Form>
    </>
  );
};

export default DataForm;
