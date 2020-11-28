/* components */
import ProductList from "components/ProductList";
/* styles */
import { ProdListWrap } from "styles/ProdListWrap";
import { ShopContainer } from "./style";

export const Shop = () => (
  <ShopContainer>
    <ProdListWrap>
      <ProductList title="PARDUOTUVĖ" edit />
    </ProdListWrap>
  </ShopContainer>
);
