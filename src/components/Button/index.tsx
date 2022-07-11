import { AddButton } from "./styles";
import { BsPlusLg } from "react-icons/bs";

interface IButton {
  onClick?: () => void;
  text: string;
  type?: "submit" | "button" | "reset";
}

const Button = (props: IButton) => {
  return (
    <AddButton type={props.type} onClick={props.onClick}>
      {props.text !== "SALVAR" && (
        <span>
          <BsPlusLg />
        </span>
      )}
      {props.text}
    </AddButton>
  );
};

export default Button;
