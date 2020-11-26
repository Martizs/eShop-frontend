/* components */
import ProductList from "components/ProductList";
/* styles */
import { ProdListWrap } from "styles/ProdListWrap";
import { ShopContainer } from "./style";
/* mock */
import { prodItems } from "mock/productMocks";

export const Shop = () => (
  <ShopContainer>
    <ProdListWrap>
      <ProductList title="PARDUOTUVĖ" data={prodItems} edit />
    </ProdListWrap>
  </ShopContainer>
);
