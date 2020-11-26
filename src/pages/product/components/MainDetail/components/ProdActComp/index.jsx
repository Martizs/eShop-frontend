/* mock */
import { sizeItems } from "./mock";
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
        <Counter />
      </CounterWrap>

      <ButtContainer>
        <DDWrapper>
          <DropDown initVal="DYDIS" items={sizeItems} />
        </DDWrapper>
        <Button onClick={() => console.log("i krepseli")} text="Į KREPŠELĮ" />
      </ButtContainer>
    </ActContainer>
  </ProdActCont>
);
