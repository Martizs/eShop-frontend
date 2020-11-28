/* components */
import ProductList from "components/ProductList";
import MainDetail from "./components/MainDetail";
/* styles */
import { ProdContainer } from "./style";

export const Product = ({ scrollTop }) => (
  <ProdContainer>
    <MainDetail scrollTop={scrollTop} />
    <ProductList title="KITI GAMINIAI" oneRow={4} />
  </ProdContainer>
);
