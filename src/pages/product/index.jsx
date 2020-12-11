import { useSelector } from "react-redux";
/* components */
import ProductList from "components/ProductList";
import MainDetail from "./components/MainDetail";
/* styles */
import { ProdContainer } from "./style";

export const Product = ({ scrollTop, match }) => {
  const currLang = useSelector((state) => state.currLang);

  return (
    <ProdContainer>
      <MainDetail scrollTop={scrollTop} currLang={currLang} />
      <ProductList
        title={currLang.otherProdTxt}
        oneRow={4}
        rand="rand"
        noId={match.params.id}
      />
    </ProdContainer>
  );
};
