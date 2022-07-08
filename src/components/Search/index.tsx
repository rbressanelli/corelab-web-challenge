import { Container, Input } from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsSearch } from 'react-icons/bs'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'

interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <Container>
      <span><BsSearch /></span>
      <Input type="text" placeholder={props.placeholder} value={props.value} />
      <p>< TbAdjustmentsHorizontal/></p>
    </Container>
  );
};

export default Search;
