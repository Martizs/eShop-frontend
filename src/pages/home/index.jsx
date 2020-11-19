import { useHistory } from "react-router-dom";
/* components */
import { AboutText } from "components/AboutText";
import { ProductList } from "components/ProductList";
import { SlideShow } from "components/SlideShow";
/* styles */
import { HomeCont, AboutWrapper } from "./style";

export const Home = () => {
  let history = useHistory();

  return (
    <HomeCont>
      <SlideShow />
      <ProductList />
      <AboutWrapper onClick={() => history.push("/apie")}>
        <AboutText overFlow />
      </AboutWrapper>
    </HomeCont>
  );
};
