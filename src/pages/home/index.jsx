import { useHistory } from "react-router-dom";
/* components */
import { AboutText } from "components/AboutText";
import ProductList from "components/ProductList";
import { SlideShow } from "components/SlideShow";
/* styles */
import { HomeCont, AboutWrapper } from "./style";
import { ProdListWrap } from "styles/ProdListWrap";

export const Home = () => {
  let history = useHistory();

  return (
    <HomeCont>
      <SlideShow />
      <ProdListWrap>
        <ProductList title="PARDUOTUVĖ" />
      </ProdListWrap>
      <AboutWrapper onClick={() => history.push("/apie")}>
        <AboutText overFlow />
      </AboutWrapper>
    </HomeCont>
  );
};
