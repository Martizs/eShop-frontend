import { useEffect, useState } from "react";
/* components */
import { ProductItem } from "components/ProductItem";
/* styles */
import { GridContainer, GridItem, ProdListCont, GridRow } from "./style";
import { MainTitleText } from "styles/MainTitleText";

export const ProductList = (props) => {
  const [formedData, setFormedData] = useState([]);

  useEffect(() => {
    const dataz = [...props.data];
    let formData = dataz;
    if (!props.showAll) {
      formData = [dataz.splice(0, 3), dataz.splice(0, 3), dataz.splice(0, 3)];
    }

    setFormedData(formData);
  }, []);

  return (
    <ProdListCont>
      <MainTitleText>{props.title}</MainTitleText>
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
