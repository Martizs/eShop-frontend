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
} from "./style";

export const ProductItem = (props) => {
  return (
    <ProdItCont>
      {props.loggedIn && (
        <AdminBut text="EDIT" type="edit" link={`/produktas/${props.id}`} />
      )}
      <ImgCont to={`/produktas/${props.id}`}>
        <ProdImg src={props.primaryPic} alt={props.title} />
        <ProdImgTop src={props.secondaryPic} alt={props.title} />
      </ImgCont>

      <ProdTitle>{props.title}</ProdTitle>
      <ProdPrice>{props.price}€</ProdPrice>
    </ProdItCont>
  );
};
