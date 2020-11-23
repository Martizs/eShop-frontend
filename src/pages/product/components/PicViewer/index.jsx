import { useState } from "react";
/* components */
import ZoomPic from "./components/ZoomPic";
/* style */
import { PicViewerCont, PicRow, ThumbNail } from "./style";

export const PicViewer = (props) => {
  const [mainImg, setMainImg] = useState(props.imgData[0]);

  return (
    <PicViewerCont>
      <ZoomPic mainUri={mainImg.img} />
      <PicRow>
        {props.imgData.map((item) => (
          <ThumbNail
            key={item.key}
            selected={mainImg.key === item.key}
            onClick={() => setMainImg(item)}
            src={item.img}
            alt="img_title"
          />
        ))}
      </PicRow>
    </PicViewerCont>
  );
};
