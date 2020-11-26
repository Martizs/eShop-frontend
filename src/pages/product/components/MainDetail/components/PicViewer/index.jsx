import { useState, useEffect } from "react";
/* components */
import { AdminUpload } from "components/AdminBut/AdminUpload";
import ZoomPic from "./components/ZoomPic";
import { RadioButton } from "components/RadioButton";
import { AdminBut } from "components/AdminBut";
/* style */
import { PicViewerCont, PicRow, ThumbNail, ThumbNailCont } from "./style";
/* utils */
import remove from "lodash/remove";
import findIndex from "lodash/findIndex";
import { imgSort } from "utils/general";

export const PicViewer = (props) => {
  const [imgData, setImgData] = useState(props.imgData || []);
  const [mainImg, setMainImg] = useState(imgData[0]);

  useEffect(() => {
    setMainImg(imgData[0]);
  }, [imgData]);

  const changeImgData = (newImgData) => {
    setImgData(newImgData);
    props.setImgData(newImgData);
  };

  const handleUpload = (e) => {
    if (e.target.files.length) {
      addImage({
        rawImg: e.target.files[0],
        imgUrl: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const addImage = ({ rawImg, imgUrl }) => {
    const newImgData = [...imgData];
    newImgData.push({
      key: Math.random().toString(36).substr(2, 10),
      rawImg,
      imgUrl,
    });

    changeImgData(newImgData);
  };

  const remImage = (key) => {
    const newImgData = [...imgData];
    remove(imgData, (item) => item.key === key);
    changeImgData(imgSort(newImgData));
  };

  const setPrimaryImg = (key) => {
    const newImgData = [...imgData];
    const updateInd = findIndex(imgData, ["key", key]);
    const remPrimInd = findIndex(imgData, "primary");

    if (remPrimInd !== -1) {
      newImgData[remPrimInd].primary = false;
    }

    newImgData[updateInd].primary = true;
    newImgData[updateInd].secondary = false;

    changeImgData(imgSort(newImgData));
  };

  const setSecondaryImg = (key) => {
    const newImgData = [...imgData];
    const updateInd = findIndex(imgData, ["key", key]);
    const remSecInd = findIndex(imgData, "secondary");

    if (remSecInd !== -1) {
      newImgData[remSecInd].secondary = false;
    }

    newImgData[updateInd].primary = false;
    newImgData[updateInd].secondary = true;

    changeImgData(imgSort(newImgData));
  };

  return (
    <PicViewerCont>
      <ZoomPic mainUri={mainImg?.imgUrl} />
      {props.loggedIn && (
        <AdminUpload
          htmlFor="upload-button"
          text="ADD IMAGE"
          type="add"
          margin="20px auto"
        />
      )}
      <PicRow admin={props.loggedIn}>
        {imgData.map((item) => (
          <ThumbNailCont key={item.key} admin={props.loggedIn}>
            {props.loggedIn && (
              <AdminBut
                type="del"
                butStyle="fit"
                text="REMOVE"
                onClick={() => remImage(item.key)}
              />
            )}
            <ThumbNail
              selected={mainImg?.key === item.key}
              onClick={() => setMainImg(item)}
              src={item.imgUrl}
              alt="img"
            />
            <RadioButton
              type="small"
              label="primary"
              checked={item.primary}
              onCheck={() => setPrimaryImg(item.key)}
            />
            <RadioButton
              type="small"
              label="secondary"
              checked={item.secondary}
              onCheck={() => setSecondaryImg(item.key)}
            />
          </ThumbNailCont>
        ))}
      </PicRow>
      {props.loggedIn && (
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onClick={(event) => {
            event.target.value = null;
          }}
          onChange={handleUpload}
        />
      )}
    </PicViewerCont>
  );
};
