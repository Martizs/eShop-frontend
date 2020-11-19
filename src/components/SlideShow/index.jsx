import { Zoom } from "react-slideshow-image";
/* styles */
import {
  BackArrow,
  ForwArrow,
  slidImg,
  slidImgCont,
  ArrowContainer,
} from "./style";
import "react-slideshow-image/dist/styles.css";
/* mock */
import { imgData } from "./mock";

export const SlideShow = () => {
  const zoomInProperties = {
    scale: 2,
    duration: 4000,
    transitionDuration: 300,
    easing: "cubic-out",
    prevArrow: (
      <ArrowContainer>
        <BackArrow />
      </ArrowContainer>
    ),
    nextArrow: (
      <ArrowContainer>
        <ForwArrow />
      </ArrowContainer>
    ),
  };

  return (
    <Zoom {...zoomInProperties}>
      {imgData.map((each, index) => (
        <div key={index} style={slidImgCont}>
          <img style={slidImg} src={each} />
        </div>
      ))}
    </Zoom>
  );
};
