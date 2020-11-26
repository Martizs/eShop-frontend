/* components */
import ProductList from "components/ProductList";
import MainDetail from "./components/MainDetail";
/* styles */
import { ProdContainer } from "./style";
/* mock */
import { prodImages } from "./mock";
import { prodItems } from "mock/productMocks";

export const Product = () => (
  <ProdContainer>
    <MainDetail />
    <ProductList title="KITI GAMINIAI" data={prodItems} oneRow={4} />
  </ProdContainer>
);
