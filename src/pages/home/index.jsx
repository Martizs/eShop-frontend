import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
/* components */
import { AboutText } from "components/AboutText";
import ProductList from "components/ProductList";
import SlideShow from "components/SlideShow";
/* styles */
import { HomeCont, AboutWrapper } from "./style";
import { ProdListWrap } from "styles/ProdListWrap";
/* utils */
import { apiCall } from "utils/apiCalls";
import { LoadingIc } from "components/LoadingIc";

export const Home = () => {
  let history = useHistory();
  const currLang = useSelector((state) => state.currLang);

  const [aboutText, setText] = useState(null);

  useEffect(() => {
    apiCall("get", "getAbout", null, false, (data) => {
      const item = data[0];
      if (item) {
        setText(item.text);
      }
    });
  }, []);

  return (
    <HomeCont>
      <SlideShow />
      <ProdListWrap>
        <ProductList title={currLang.shopTxt} />
      </ProdListWrap>
      <AboutWrapper onClick={() => history.push("/ap")}>
        {!aboutText ? <LoadingIc /> : <AboutText overFlow text={aboutText} />}
      </AboutWrapper>
    </HomeCont>
  );
};
