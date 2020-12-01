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
} from "./style";

export const ProductItem = (props) => {
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
        {props.disabled && <NotAvCont>Nebėra</NotAvCont>}
      </ImgCont>

      <ProdTitle>{props.title}</ProdTitle>
      <ProdPrice>{props.price}€</ProdPrice>
    </ProdItCont>
  );
};
