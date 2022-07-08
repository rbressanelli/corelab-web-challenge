import { AddButton } from "./styles";
import { BsPlusLg } from 'react-icons/bs'

interface IButton {
  onClick: () => void;
  text: string;
}

const Button = (props: IButton) => {
  return <AddButton  onClick={props.onClick}><span><BsPlusLg /></span> {props.text}</AddButton>
};

export default Button;
