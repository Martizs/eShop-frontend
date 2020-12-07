import { useEffect, useState } from "react";
import { Zoom } from "react-slideshow-image";
/* styles */
import {
  BackArrow,
  ForwArrow,
  slidImg,
  slidImgCont,
  ArrowContainer,
  slidImgSmall,
  OutCont,
} from "./style";
import "react-slideshow-image/dist/styles.css";
/* utils */
import { apiCall } from "utils/apiCalls";
import { withResizeDetector } from "react-resize-detector";
import { LoadingIc } from "components/LoadingIc";

const SlideShow = (props) => {
  const [imgData, setImgData] = useState([]);
  const [mobile, setMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }

    apiCall(
      "get",
      "getBanners",
      null,
      false,
      (data) => {
        setImgData(data);
        setLoading(false);
      },
      (err) => {
        // nothing happens
      }
    );
  }, []);

  useEffect(() => {
    if (!mobile && window.innerWidth <= 600) {
      setMobile(true);
    } else if (mobile && window.innerWidth > 600) {
      setMobile(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.width]);

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
    <>
      {loading ? (
        <OutCont>
          <LoadingIc />
        </OutCont>
      ) : (
        <Zoom {...zoomInProperties}>
          {imgData?.map((img, index) => (
            <div key={index} style={slidImgCont}>
              <img style={mobile ? slidImgSmall : slidImg} src={img.imgUrl} />
            </div>
          ))}
        </Zoom>
      )}
    </>
  );
};

export default withResizeDetector(SlideShow);
