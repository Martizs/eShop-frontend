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
  const [noSize, setNoSize] = useState(
    props.defSizes[0] && !props.defSizes[0].name ? true : false
  );

  const addItem = () => {
    const newRendList = [...rendList];
    const newItem = {
      _id: Math.random().toString(36).substr(2, 10),
      new: true,
    };

    newRendList.push(newItem);
    props.addSize(newItem);

    setRendList(newRendList);
  };

  const remItem = (_id) => {
    const newRendList = [...rendList];
    remove(newRendList, (item) => item._id === _id);
    props.remSize(_id);

    setRendList(newRendList);
  };

  const onSizeCheck = () => {
    const noSizeObj = [
      {
        _id: Math.random().toString(36).substr(2, 10),
        new: true,
      },
    ];

    props.setSize(!noSize ? noSizeObj : []);
    props.setNoSize(!noSize);
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
          <SizeItem key={item._id}>
            {!noSize && (
              <TextInput
                width="30%"
                label="Name: "
                defaultValue={item.name}
                handleChange={(event) =>
                  props.editSize(index, event.target.value, true)
                }
              />
            )}

            <TextInput
              width="30%"
              label="Amount:"
              type="number"
              defaultValue={item.amount}
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
                  onClick={() => remItem(item._id)}
                />
              </RemSizeCont>
            )}
          </SizeItem>
        ))}
      </SizeListCont>
    </SizeListMainCont>
  );
};
