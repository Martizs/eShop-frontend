/* components */
import { RadioButton } from "components/RadioButton";
import { useState } from "react";
/* styles */
import { CheckRadCont } from "./style";

export const CheckRad = (props) => {
  const [checked, setChecked] = useState(props.defValue);

  const onCheck = () => {
    setChecked(!checked);
    props.setChecked(!checked);
  };

  return (
    <CheckRadCont padding={props.padding}>
      <RadioButton label={props.label} checked={checked} onCheck={onCheck} />
    </CheckRadCont>
  );
};
