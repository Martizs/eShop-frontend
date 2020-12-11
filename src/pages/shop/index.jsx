import { useSelector } from "react-redux";
/* components */
import ProductList from "components/ProductList";
/* styles */
import { ShopContainer } from "./style";

export const Shop = () => {
  const currLang = useSelector((state) => state.currLang);
  return (
    <ShopContainer>
      <ProductList
        catDDData={currLang.catDDData}
        shop
        title={currLang.shopTxt}
        edit
      />
    </ShopContainer>
  );
};
