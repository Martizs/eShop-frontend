import { useEffect, useState } from "react";
/* components */
import { ProductItem } from "components/ProductItem";
/* styles */
import {
  GridContainer,
  GridItem,
  ProdListCont,
  TitleContainer,
  GridRow,
} from "./style";
/* mock */
import { data } from "./mock";

export const ProductList = () => {
  const [formedData, setFormedData] = useState([]);

  useEffect(() => {
    const dataz = [...data];
    const formData = [
      dataz.splice(0, 3),
      dataz.splice(0, 3),
      dataz.splice(0, 3),
    ];
    setFormedData(formData);
  }, []);

  return (
    <ProdListCont>
      <TitleContainer>PARDUOTUVĖ</TitleContainer>
      <GridContainer>
        {formedData.map((row, rowInd) => (
          <GridRow key={`row-${rowInd}`}>
            {row.map((prod, prodInd) => (
              <GridItem key={`title-${rowInd}-${prodInd}`}>
                <ProductItem
                  title={prod.title}
                  price={prod.price}
                  primaryPic={prod.primaryPic}
                  secondaryPic={prod.secondaryPic}
                />
              </GridItem>
            ))}
          </GridRow>
        ))}
      </GridContainer>
    </ProdListCont>
  );
};
