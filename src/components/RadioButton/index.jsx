/* styles */
import { OuterCircle, InnerCircle, RadCont, RadLabel } from "./style";

export const RadioButton = (props) => (
  <RadCont>
    <OuterCircle onClick={props.onCheck}>
      <InnerCircle checked={props.checked} />
    </OuterCircle>
    <RadLabel>{props.label}</RadLabel>
  </RadCont>
);
