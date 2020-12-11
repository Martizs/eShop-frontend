import { useSelector } from "react-redux";
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
  PriceCont,
  DiscWrapper,
  ProdDisc,
} from "./style";
import { ProdActCont } from "../../style";

export const ProdActComp = (props) => {
  const currLang = useSelector((state) => state.currLang);

  return (
    <ProdActCont>
      <ProdTitle>
        {currLang.key === "en" ? props.enTitle : props.title}
      </ProdTitle>
      {props.discPrice ? (
        <PriceCont>
          <DiscWrapper>
            <ProdPrice>{props.price}€</ProdPrice>
          </DiscWrapper>
          <ProdDisc>{props.discPrice}€</ProdDisc>
        </PriceCont>
      ) : (
        <ProdPrice>{props.price}€</ProdPrice>
      )}
      <ProdDesc>{currLang.key === "en" ? props.enDesc : props.desc}</ProdDesc>
      <ActContainer>
        <CounterWrap>
          <Counter setCount={props.setSelAmount} />
        </CounterWrap>

        <ButtContainer>
          {props.defSizes && props.defSizes[0]?.name && (
            <DDWrapper>
              <DropDown
                initVal={props.currLang.sizeTxt}
                items={props.defSizes}
                onItemSelect={props.userSelSize}
              />
            </DDWrapper>
          )}
          <Button onClick={props.addToBasket} text={props.currLang.toCartTxt} />
        </ButtContainer>
      </ActContainer>
    </ProdActCont>
  );
};
