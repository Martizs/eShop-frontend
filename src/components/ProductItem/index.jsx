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
  // TODO: show case why they need to use the same dimensions for all their product images
  //   more like the same dimension proportions
  //   const showCaseImgDimensionIssues =
  //     "https://memegenerator.net/img/instances/53433360/such-price-so-koi-much-cute-wow.jpg";

  return (
    <ProdItCont>
      <ImgCont>
        <ProdImg src={props.primaryPic} alt={props.title} />
        <ProdImgTop src={props.secondaryPic} alt={props.title} />
      </ImgCont>

      <ProdTitle>{props.title}</ProdTitle>
      <ProdPrice>{props.price}€</ProdPrice>
    </ProdItCont>
  );
};
