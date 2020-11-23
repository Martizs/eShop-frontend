import { useState } from "react";
import AnimateHeight from "react-animate-height";
/* consts */
import { sendOptions } from "./const";
/* components */
import { RadioButton } from "components/RadioButton";
import { TextInput } from "components/TextInput";
/* styles */
import { CartContWrapper, PriceText } from "../../style";
import { SendCont, SendRow, PostAdrInp } from "./style";

export const SendOpt = () => {
  const [currOpt, setCurrOpt] = useState(sendOptions[0].key);

  const onCheck = (index) => {
    setCurrOpt(sendOptions[index].key);
  };

  return (
    <SendCont>
      <CartContWrapper>
        <SendRow>
          <RadioButton
            onCheck={() => onCheck(0)}
            checked={currOpt === sendOptions[0].key}
            label={sendOptions[0].title}
          />
          <PriceText>4.00 €</PriceText>
        </SendRow>

        <AnimateHeight
          duration={300}
          height={currOpt === sendOptions[0].key ? "auto" : 0}
        >
          <PostAdrInp>
            <TextInput
              width="50%"
              height="100px"
              type="textarea"
              placeholder="Įrašykite paštomato adresą"
              handleChange={(event) => console.log("terxt", event.target.value)}
            />
          </PostAdrInp>
        </AnimateHeight>
        <SendRow>
          <RadioButton
            onCheck={() => onCheck(1)}
            checked={currOpt === sendOptions[1].key}
            label={sendOptions[1].title}
          />
          <PriceText>5.00 €</PriceText>
        </SendRow>
        <SendRow>
          <RadioButton
            onCheck={() => onCheck(2)}
            checked={currOpt === sendOptions[2].key}
            label={sendOptions[2].title}
          />
          <PriceText>5.00 €</PriceText>
        </SendRow>
      </CartContWrapper>
    </SendCont>
  );
};
