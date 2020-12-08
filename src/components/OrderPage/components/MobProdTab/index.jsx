/* components */
import { Button } from "components/Button";
import { Counter } from "components/Counter";
/* styles */
import {
  MobProdCont,
  MobTabRow,
  MobItemCont,
  MobColTitle,
  MobTableImg,
  MobTabBut,
  MobPriceText,
} from "./style";
/* redux */
import { useDispatch } from "react-redux";
import { remItem, setItemCount } from "redux_store/cart/actions";
/* utils */
import { floatNumAdj } from "utils/general";

export const MobProdTab = ({ cartItems }) => {
  const dispatch = useDispatch();

  return (
    <MobProdCont>
      {cartItems.map((cartIt, index) => (
        <MobItemCont key={cartIt.prodId}>
          <MobTabBut>
            <Button text="PAŠALINTI" onClick={() => dispatch(remItem(index))} />
          </MobTabBut>

          <MobTabRow>
            <MobColTitle>PRODUKTAS</MobColTitle>
            <MobTableImg src={cartIt.img.imgUrl} alt="img_title" />
          </MobTabRow>
          <MobTabRow>
            <MobColTitle>DYDIS</MobColTitle>
            <MobPriceText>{cartIt.selectedSize.name || ""}</MobPriceText>
          </MobTabRow>
          <MobTabRow>
            <MobColTitle>VIENETO KAINA</MobColTitle>
            <MobPriceText>{cartIt.price} €</MobPriceText>
          </MobTabRow>
          <MobTabRow>
            <MobColTitle>KIEKIS</MobColTitle>
            <Counter
              resp
              defCount={cartIt.selectedAmount}
              setCount={(count) => dispatch(setItemCount(index, count))}
            />
          </MobTabRow>
          <MobTabRow>
            <MobColTitle>VISO</MobColTitle>
            <MobPriceText>
              {floatNumAdj(
                parseFloat(cartIt.price, 10) *
                  parseInt(cartIt.selectedAmount, 10)
              )}{" "}
              €
            </MobPriceText>
          </MobTabRow>
        </MobItemCont>
      ))}
    </MobProdCont>
  );
};
