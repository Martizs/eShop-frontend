/* components */
import { AdminBut } from "components/AdminBut";
/* styles */
import {
  ProdItCont,
  ProdPrice,
  ProdImg,
  ProdTitle,
  ProdImgTop,
  ImgCont,
  NotAvCont,
  ProdDisc,
  PriceCont,
  DiscWrapper,
} from "./style";

export const ProductItem = (props) => {
  const discPrice =
    props.discPrice && props.discPrice > 0 ? props.discPrice + "€" : "";

  return (
    <ProdItCont>
      {props.loggedIn && (
        <AdminBut text="EDIT" type="edit" link={`/produktas/${props.id}`} />
      )}
      <ImgCont disabled={props.disabled} to={`/produktas/${props.id}`}>
        <ProdImg
          disabled={props.disabled}
          src={props.primaryPic}
          alt={props.title}
        />
        <ProdImgTop
          disabled={props.disabled}
          src={props.secondaryPic}
          alt={props.title}
        />
        {props.disabled && (
          <NotAvCont>{props.currLang.outOfStockTxt}</NotAvCont>
        )}
      </ImgCont>

      <ProdTitle>{props.title}</ProdTitle>

      {discPrice ? (
        <PriceCont>
          <DiscWrapper>
            <ProdPrice>{props.price}€</ProdPrice>
          </DiscWrapper>
          <ProdDisc>{discPrice}</ProdDisc>
        </PriceCont>
      ) : (
        <ProdPrice>{props.price}€</ProdPrice>
      )}
    </ProdItCont>
  );
};
