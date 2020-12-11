import { ButtonCont } from "./style";

export const Button = (props) => {
  return (
    <ButtonCont fontSize={props.fontSize} onClick={props.onClick}>
      {props.text}
    </ButtonCont>
  );
};
