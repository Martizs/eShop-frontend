/* mock */
import { sizeItems } from "./mock";
/* components */
import { Button } from "components/Button";
import { DropDown } from "components/DropDown";
import { Counter } from "components/Counter";
/* style */
import {
  ProdActCont,
  ProdPrice,
  ProdDesc,
  ActContainer,
  DDWrapper,
  ButtContainer,
  ProdTitle,
  CounterWrap,
} from "./style";

export const ProdActComp = () => {
  return (
    <ProdActCont>
      <ProdTitle>DOGE</ProdTitle>
      <ProdPrice>420.69€</ProdPrice>
      <ProdDesc>
        l;sakdask; k;ldsk;l asdkl;jas sldkn askdnklsa ndkas ndlkasnd;l asknd
        laskdnak ndas;lk dnaslkdn salkdnaks l;dnaslkd nask nsadklas ndalskd
        nas;lkd nsadlknas kldasnd lkasn dlk
      </ProdDesc>
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
};
