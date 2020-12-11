import { useSelector } from "react-redux";
/* components */
import SimpleTextPage from "components/SimpleTextPage";
import SlideShow from "components/SlideShow";
/* style */
import { AboutSlideShow } from "./style";

export const About = () => {
  const currLang = useSelector((state) => state.currLang);

  return (
    <SimpleTextPage
      getEndpoint="getAbout"
      saveEndpoint="saveAbout"
      title={currLang.abTxt}
    >
      <AboutSlideShow>
        <SlideShow noArrows />
      </AboutSlideShow>
    </SimpleTextPage>
  );
};
