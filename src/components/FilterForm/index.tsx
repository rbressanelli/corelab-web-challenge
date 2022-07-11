import { Container } from "./styles";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useVehicle } from "../../Providers/vehicles";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const FilterForm = () => {
  const animatedComponents = makeAnimated();
  const {
    vehiclesList,
    setBrand,
    setColor,
    setYear,
    setMinValue,
    setMaxValue,
  } = useVehicle();
  const navigate = useNavigate();

  const nameChoices = vehiclesList.map((value) => {
    return { value: value.name, label: value.name };
  });
  const colorChoices = vehiclesList.map((value) => {
    return { value: value.color, label: value.color };
  });
  const yearChoices = vehiclesList.map((value) => {
    return { value: value.year, label: value.year };
  });

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <div>
        <label htmlFor="brand">Marca:</label>
        <Select
          id="brand"
          closeMenuOnSelect={true}
          components={animatedComponents}
          defaultValue={[]}
          options={nameChoices}
          isClearable
          onChange={(e: any) => setBrand(e?.value)}
        />
      </div>
      <div>
        <label htmlFor="color">Cor:</label>
        <Select
          id="color"
          closeMenuOnSelect={true}
          components={animatedComponents}
          defaultValue={[]}
          options={colorChoices}
          isClearable
          onChange={(e: any) => setColor(e?.value)}
        />
      </div>
      <div>
        <label htmlFor="year">Ano:</label>
        <Select
          id="year"
          closeMenuOnSelect={true}
          components={animatedComponents}
          defaultValue={[]}
          options={yearChoices}
          isClearable
          onChange={(e: any) => setYear(e?.value)}
        />
      </div>
      <div className="price-container">
        <div className="price">
          <label htmlFor="min">Preço mín.</label>
          <input
            disabled
            id="min"
            type="text"
            onChange={(e: any) => setMinValue(e?.value)}
          />
        </div>
        <div className="price">
          <label htmlFor="max">Preço max.</label>
          <input
            disabled
            id="max"
            type="text"
            onChange={(e: any) => setMaxValue(e?.value)}
          />
        </div>
      </div>
      <Button onClick={() => handleClick()} text="SALVAR"></Button>
    </Container>
  );
};

export default FilterForm;
