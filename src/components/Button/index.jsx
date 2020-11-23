import { ButtonCont } from "./style";

export const Button = (props) => {
  return <ButtonCont onClick={props.onClick}>{props.text}</ButtonCont>;
};
