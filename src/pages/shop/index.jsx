/* components */
import { ProductList } from "components/ProductList";
/* styles */
import { ProdListWrap } from "styles/ProdListWrap";
import { ShopContainer } from "./style";
/* mock */
import { prodItems } from "mock/productMocks";

export const Shop = (props) => (
  <ShopContainer>
    <ProdListWrap>
      <ProductList
        private={props.private}
        title="PARDUOTUVĖ"
        data={prodItems}
      />
    </ProdListWrap>
  </ShopContainer>
);
