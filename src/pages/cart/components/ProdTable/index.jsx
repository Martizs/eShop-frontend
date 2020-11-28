/* consts */
import { colWidths } from "./const";
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
} from "./style";

export const ProdTable = () => {
  return (
    <ProdTableCont>
      <TableHeader>
        <TableCell percWidth={colWidths[0]} />
        <TableCell percWidth={colWidths[1]}>
          <ColTitle>PRODUKTAS</ColTitle>
        </TableCell>
        <TableCell percWidth={colWidths[2]}>
          <ColTitle>DYDIS</ColTitle>
        </TableCell>
        <TableCell percWidth={colWidths[3]}>
          <ColTitle>VIENETO KAINA</ColTitle>
        </TableCell>
        <TableCell percWidth={colWidths[4]}>
          <ColTitle>KIEKIS</ColTitle>
        </TableCell>
        <TableCell percWidth={colWidths[5]} toEnd>
          <ColTitle>VISO</ColTitle>
        </TableCell>
      </TableHeader>
      <CartContWrapper>
        <TableRow>
          <TableCell percWidth={colWidths[0]} toStart>
            <CloseIc onClick={() => console.log("remove")} />
          </TableCell>
          <TableCell percWidth={colWidths[1]}>
            <TableImg
              src="https://miro.medium.com/max/1800/1*jHgVL8ln-1-P8CGcvUck0g.jpeg"
              alt="img_title"
            />
          </TableCell>
          <TableCell percWidth={colWidths[2]}>
            <PriceText>XL</PriceText>
          </TableCell>
          <TableCell percWidth={colWidths[3]}>
            <PriceText>420.69 €</PriceText>
          </TableCell>
          <TableCell percWidth={colWidths[4]}>
            <Counter />
          </TableCell>
          <TableCell percWidth={colWidths[5]} toEnd>
            <PriceText>420.69 €</PriceText>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell percWidth={colWidths[0]} toStart>
            <CloseIc onClick={() => console.log("remove")} />
          </TableCell>
          <TableCell percWidth={colWidths[1]}>
            <TableImg
              src="https://top10.today/storage/files/Kristen-G/best-doge-memes/best-doge-memes.png"
              alt="img_title"
            />
          </TableCell>
          <TableCell percWidth={colWidths[2]}>
            <PriceText>XL</PriceText>
          </TableCell>
          <TableCell percWidth={colWidths[3]}>
            <PriceText>420.69 €</PriceText>
          </TableCell>
          <TableCell percWidth={colWidths[4]}>
            <Counter />
          </TableCell>
          <TableCell percWidth={colWidths[5]} toEnd>
            <PriceText>420.69 €</PriceText>
          </TableCell>
        </TableRow>
        <TableFooter>
          <TableCell percWidth={colWidths[0]} />
          <TableCell percWidth={colWidths[1]}>
            <PriceText>SUMA</PriceText>
          </TableCell>
          <TableCell percWidth={colWidths[2]} />
          <TableCell percWidth={colWidths[3]} />
          <TableCell percWidth={colWidths[4]} />
          <TableCell percWidth={colWidths[5]} toEnd>
            <PriceText>420.69 €</PriceText>
          </TableCell>
        </TableFooter>
      </CartContWrapper>
    </ProdTableCont>
  );
};
