import { useState } from "react";
/* components */
import { AdminBut } from "components/AdminBut";
import { TextInput } from "components/TextInput";
import { RadioButton } from "components/RadioButton";
/* styles */
import {
  RemSizeCont,
  SizeItem,
  SizeListCont,
  SizeListMainCont,
  SizeLabel,
  SizeButCont,
  SizeRadCont,
} from "./style";
/* utils */
import remove from "lodash/remove";

export const SizeList = (props) => {
  const [rendList, setRendList] = useState(props.defSizes || []);
  // TODO: cover noSize initial value load, shouldnt be false
  // always
  const [noSize, setNoSize] = useState(false);

  const addItem = () => {
    const newRendList = [...rendList];
    const newItem = {
      key: Math.random().toString(36).substr(2, 10),
    };

    newRendList.push(newItem);
    props.addSize(newItem);

    setRendList(newRendList);
  };

  const remItem = (key) => {
    const newRendList = [...rendList];
    remove(newRendList, (item) => item.key === key);
    props.remSize(key);

    setRendList(newRendList);
  };

  const onSizeCheck = () => {
    const noSizeObj = [
      {
        key: Math.random().toString(36).substr(2, 10),
      },
    ];

    props.setSize(!noSize ? noSizeObj : []);
    setNoSize(!noSize);
    setRendList(!noSize ? noSizeObj : []);
  };

  return (
    <SizeListMainCont>
      <SizeLabel>Sizes:</SizeLabel>
      <SizeButCont>
        <SizeRadCont>
          <RadioButton label="NO SIZE" checked={noSize} onCheck={onSizeCheck} />
        </SizeRadCont>
        {!noSize && (
          <AdminBut
            type="add"
            butStyle="small"
            text="ADD SIZE"
            onClick={addItem}
          />
        )}
      </SizeButCont>

      <SizeListCont>
        {rendList.map((item, index) => (
          <SizeItem key={item.key}>
            {!noSize && (
              <TextInput
                width="30%"
                label="Name: "
                handleChange={(event) =>
                  props.editSize(index, event.target.value, true)
                }
              />
            )}

            <TextInput
              width="30%"
              label="Amount:"
              type="number"
              handleChange={(event) =>
                props.editSize(index, event.target.value)
              }
            />
            {!noSize && (
              <RemSizeCont>
                <AdminBut
                  type="del"
                  butStyle="small"
                  text="REMOVE"
                  onClick={() => remItem(item.key)}
                />
              </RemSizeCont>
            )}
          </SizeItem>
        ))}
      </SizeListCont>
    </SizeListMainCont>
  );
};
