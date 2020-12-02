/* components */
import SimpleTextPage from "components/SimpleTextPage";
import { SlideShow } from "components/SlideShow";
/* style */
import { AboutSlideShow } from "./style";

export const About = () => (
  <SimpleTextPage
    getEndpoint="getAbout"
    saveEndpoint="saveAbout"
    title="APIE MUS"
  >
    <AboutSlideShow>
      <SlideShow noArrows />
    </AboutSlideShow>
  </SimpleTextPage>
);
