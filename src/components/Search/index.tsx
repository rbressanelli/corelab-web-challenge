import { Container, Input } from "./styles";
import { BsSearch } from "react-icons/bs";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

interface ISearch {
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: ISearch) => {
  const navigate = useNavigate();

  return (
    <Container>
      <span>
        <BsSearch />
      </span>
      <Input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <p>
        <TbAdjustmentsHorizontal
          id="filter"
          onClick={() => navigate("/filter")}
        />
      </p>
    </Container>
  );
};

export default Search;
