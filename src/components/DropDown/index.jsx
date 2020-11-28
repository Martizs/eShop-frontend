import { useState } from "react";
/* components */
import { Button } from "components/Button";
/* styles */
import {
  DDContainer,
  DDItem,
  DDList,
  DDItemText,
  AbsAnimateHeight,
} from "./style";

export const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const [currItem, setCurrItem] = useState(props.initVal);

  const onItemPress = (item) => {
    setCurrItem(item.title || item.name);
    props.onItemSelect(item);
    setOpen(false);
  };

  return (
    <DDContainer>
      <Button onClick={() => setOpen(!open)} text={currItem} />
      <AbsAnimateHeight duration={500} height={open ? "auto" : 0}>
        <DDList>
          {props.items.map((item, index) => (
            <DDItem key={`${item.key}-${index}`}>
              <DDItemText onClick={() => onItemPress(item)}>
                {item.title || item.name}
              </DDItemText>
            </DDItem>
          ))}
        </DDList>
      </AbsAnimateHeight>
    </DDContainer>
  );
};
