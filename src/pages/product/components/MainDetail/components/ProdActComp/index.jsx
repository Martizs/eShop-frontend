/* components */
import { Button } from "components/Button";
import { DropDown } from "components/DropDown";
import { Counter } from "components/Counter";
/* style */
import {
  ProdPrice,
  ProdDesc,
  ActContainer,
  DDWrapper,
  ButtContainer,
  ProdTitle,
  CounterWrap,
} from "./style";
import { ProdActCont } from "../../style";

export const ProdActComp = (props) => (
  <ProdActCont>
    <ProdTitle>{props.title}</ProdTitle>
    <ProdPrice>{props.price}€</ProdPrice>
    <ProdDesc>{props.desc}</ProdDesc>
    <ActContainer>
      <CounterWrap>
        <Counter setCount={props.setSelAmount} />
      </CounterWrap>

      <ButtContainer>
        {props.defSizes[0]?.name && (
          <DDWrapper>
            <DropDown
              initVal="DYDIS"
              items={props.defSizes}
              onItemSelect={props.userSelSize}
            />
          </DDWrapper>
        )}
        <Button onClick={props.addToBasket} text="Į KREPŠELĮ" />
      </ButtContainer>
    </ActContainer>
  </ProdActCont>
);
