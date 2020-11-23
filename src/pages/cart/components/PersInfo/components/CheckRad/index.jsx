/* components */
import { RadioButton } from "components/RadioButton";
import { useState } from "react";
/* styles */
import { CheckRadCont } from "./style";

export const CheckRad = (props) => {
  const [checked, setChecked] = useState(true);

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <CheckRadCont>
      <RadioButton label={props.label} checked={checked} onCheck={onCheck} />
    </CheckRadCont>
  );
};
