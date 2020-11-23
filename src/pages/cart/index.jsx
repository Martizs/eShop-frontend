/* consts */
import { colWidths } from "./components/ProdTable/const";
/* components */
import { ProdTable } from "./components/ProdTable";
import { SendOpt } from "./components/SendOpt";
import { PersInfo } from "./components/PersInfo";
import { Button } from "components/Button";
/* styles */
import { MainTitleText } from "styles/MainTitleText";
import {
  CartContainer,
  PriceText,
  CartContWrapper,
  PersInfoTitle,
  CartBut,
} from "./style";
import { TableCell, TableFooter } from "./components/ProdTable/style";

export const Cart = () => {
  return (
    <CartContainer>
      <MainTitleText>KREPŠELIS</MainTitleText>
      <ProdTable />
      <MainTitleText>SIUNTIMO BŪDAS</MainTitleText>
      <SendOpt />
      <CartContWrapper>
        <TableFooter>
          <TableCell percWidth={colWidths[0]} />
          <TableCell percWidth={colWidths[1]}>
            <PriceText>VISO</PriceText>
          </TableCell>
          <TableCell percWidth={colWidths[2]} />
          <TableCell percWidth={colWidths[3]} />
          <TableCell percWidth={colWidths[4]} toEnd>
            <PriceText>420.69 €</PriceText>
          </TableCell>
        </TableFooter>
      </CartContWrapper>
      <PersInfoTitle>ASMENINĖ INFORMACIJA</PersInfoTitle>
      <PersInfo />
      <CartBut>
        <Button text="TĘSTI" onClick={() => console.log("testi")} />
      </CartBut>
    </CartContainer>
  );
};
