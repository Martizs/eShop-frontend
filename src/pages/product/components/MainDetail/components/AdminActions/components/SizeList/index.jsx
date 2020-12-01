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
  SizeItemCont,
  PendOrdCont,
} from "./style";
/* utils */
import remove from "lodash/remove";
import { toast } from "react-toastify";

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

  const remItem = (orders, _id) => {
    const newRendList = [...rendList];

    if (!orders?.length) {
      remove(newRendList, (item) => item._id === _id);
      props.remSize(_id);

      setRendList(newRendList);
    } else {
      toast.error("Cannot delete a size with pending orders");
    }
  };

  const onSizeCheck = () => {
    let ordersPending = false;

    for (let i = 0; i < rendList.length; i++) {
      const rendItem = rendList[i];
      if (rendItem.orders?.length) {
        ordersPending = true;
        break;
      }
    }

    if (ordersPending) {
      toast.error(
        "Please address the pending orders before changing the 'NO SIZE' value"
      );
    } else {
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
    }
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
          <SizeItemCont key={item._id}>
            <SizeItem>
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
                    onClick={() => remItem(item.orders, item._id)}
                  />
                </RemSizeCont>
              )}
            </SizeItem>
            {!!item.orders?.length && (
              <PendOrdCont>Pending orders: {item.orders.length}</PendOrdCont>
            )}
          </SizeItemCont>
        ))}
      </SizeListCont>
    </SizeListMainCont>
  );
};
