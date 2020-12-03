import { useEffect, useState } from "react";
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
/* utils */
import { apiCall } from "utils/apiCalls";

export const SlideShow = (props) => {
  const [imgzData, setImgData] = useState([]);

  useEffect(() => {
    apiCall(
      "get",
      "getBanners",
      null,
      false,
      (data) => {
        setImgData(data);
      },
      (err) => {
        // nothing happens
      }
    );
  }, []);

  const zoomInProperties = {
    scale: 2,
    duration: 4000,
    transitionDuration: 300,
    easing: "cubic-out",
    arrows: false,
  };

  if (!props.noArrows) {
    zoomInProperties.arrows = true;

    zoomInProperties.prevArrow = (
      <ArrowContainer>
        <BackArrow />
      </ArrowContainer>
    );

    zoomInProperties.nextArrow = (
      <ArrowContainer>
        <ForwArrow />
      </ArrowContainer>
    );
  }

  return (
    <Zoom {...zoomInProperties}>
      {imgzData?.map((img, index) => (
        <div key={index} style={slidImgCont}>
          <img style={slidImg} src={img.imgUrl} />
        </div>
      ))}
    </Zoom>
  );
};
