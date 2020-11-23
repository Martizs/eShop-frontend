import { useEffect, useState } from "react";
/* components */
import { PicViewer } from "./components/PicViewer";
import { ProdActComp } from "./components/ProdActComp";
import { ProductList } from "components/ProductList";
/* styles */
import { ProdContainer, ProdTop } from "./style";
/* mock */
import { prodImages } from "./mock";
import { prodItems } from "mock/productMocks";

export const Product = () => {
  const [otherProds, setOtherProds] = useState([]);

  useEffect(() => {
    const formedProds = [...prodItems];
    setOtherProds([formedProds.splice(0, 4)]);
  }, []);

  return (
    <ProdContainer>
      <ProdTop>
        <PicViewer imgData={prodImages} />
        <ProdActComp />
      </ProdTop>
      {!!otherProds[0] && (
        <ProductList title="KITI GAMINIAI" data={otherProds} showAll />
      )}
    </ProdContainer>
  );
};
