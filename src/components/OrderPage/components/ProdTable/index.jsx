import { useState, useEffect } from "react";
/* consts */
import { colWidths, adminWidths } from "./const";
/* components */
import { Counter } from "components/Counter";
/* styles */
import { CartContWrapper, PriceText } from "../../style";
import {
  ProdTableCont,
  TableCell,
  TableHeader,
  ColTitle,
  TableRow,
  CloseIc,
  TableImg,
  TableFooter,
  CellText,
} from "./style";
/* utils */
import { floatNumAdj } from "utils/general";
import { getItemSum } from "../../utils";
/* redux */
import { useDispatch } from "react-redux";
import { remItem, setItemCount } from "redux_store/cart/actions";

export const ProdTable = (props) => {
  const dispatch = useDispatch();

  const [sum, setSum] = useState(0);
  const [currCols, setCurrCols] = useState(colWidths);

  useEffect(() => {
    if (props.admin) {
      setCurrCols(adminWidths);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSum(getItemSum(props.cartItems));
  }, [props.cartItems]);

  return (
    <ProdTableCont>
      <TableHeader>
        {!props.admin && <TableCell percWidth={currCols[0]} />}
        <TableCell percWidth={currCols[1]}>
          <ColTitle>{props.currLang.prodTxt}</ColTitle>
        </TableCell>
        <TableCell percWidth={currCols[2]}>
          <ColTitle>{props.currLang.sizeTxt}</ColTitle>
        </TableCell>
        {!props.admin && (
          <TableCell percWidth={currCols[3]}>
            <ColTitle>{props.currLang.vntTxt}</ColTitle>
          </TableCell>
        )}

        <TableCell percWidth={currCols[4]}>
          <ColTitle>{props.currLang.amountTxt}</ColTitle>
        </TableCell>
        {!props.admin && (
          <TableCell percWidth={currCols[5]} toEnd>
            <ColTitle>{props.currLang.totTxt}</ColTitle>
          </TableCell>
        )}
      </TableHeader>
      <CartContWrapper>
        {props.cartItems.map((cartIt, index) => (
          <TableRow key={`${cartIt.key}-${index}`}>
            {!props.admin && (
              <TableCell percWidth={currCols[0]} toStart>
                <CloseIc onClick={() => dispatch(remItem(index))} />
              </TableCell>
            )}

            <TableCell percWidth={currCols[1]}>
              {props.admin ? (
                <CellText>{cartIt.title}</CellText>
              ) : (
                <TableImg src={cartIt.img.imgUrl} alt="img_title" />
              )}
            </TableCell>
            <TableCell percWidth={currCols[2]}>
              <PriceText>{cartIt.selectedSize.name || ""}</PriceText>
            </TableCell>
            {!props.admin && (
              <TableCell percWidth={currCols[3]}>
                <PriceText>{cartIt.price} €</PriceText>
              </TableCell>
            )}

            <TableCell percWidth={currCols[4]}>
              {props.admin ? (
                <CellText>{cartIt.selectedAmount}</CellText>
              ) : (
                <Counter
                  resp
                  defCount={cartIt.selectedAmount}
                  setCount={(count) => dispatch(setItemCount(index, count))}
                />
              )}
            </TableCell>
            {!props.admin && (
              <TableCell percWidth={currCols[5]} toEnd>
                <PriceText>
                  {floatNumAdj(
                    parseFloat(cartIt.price, 10) *
                      parseInt(cartIt.selectedAmount, 10)
                  )}{" "}
                  €
                </PriceText>
              </TableCell>
            )}
          </TableRow>
        ))}
        {!props.admin && (
          <TableFooter>
            <TableCell percWidth={currCols[0]} />
            <TableCell percWidth={currCols[1]}>
              <PriceText>{props.currLang.sumTxt}</PriceText>
            </TableCell>
            <TableCell percWidth={currCols[2]} />
            <TableCell percWidth={currCols[3]} />
            <TableCell percWidth={currCols[4]} />
            <TableCell percWidth={currCols[5]} toEnd>
              <PriceText>{sum} €</PriceText>
            </TableCell>
          </TableFooter>
        )}
      </CartContWrapper>
    </ProdTableCont>
  );
};
