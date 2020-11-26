/* styles */
import { OuterCircle, InnerCircle, RadCont, RadLabel } from "./style";

export const RadioButton = (props) => (
  <RadCont onClick={props.onCheck}>
    <OuterCircle type={props.type}>
      <InnerCircle checked={props.checked} />
    </OuterCircle>
    <RadLabel type={props.type}>{props.label}</RadLabel>
  </RadCont>
);
