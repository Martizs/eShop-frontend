import { useEffect, useState } from "react";
/* components */
import { PicViewer } from "components/PicViewer";
import { AdminBut } from "components/AdminBut";
/* utils */
import { apiCall } from "utils/apiCalls";
import { toast } from "react-toastify";
/* styles */
import { BanImgCont } from "./style";
import { LoadingIc } from "components/LoadingIc";

export const BannerImages = () => {
  const [imgData, setImgData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    apiCall(
      "get",
      "getBanners",
      null,
      false,
      (data) => {
        setImgData(data);
        setDataLoaded(true);
      },
      (err) => {
        // nothing happens
      }
    );
  }, []);

  const updateBanners = () => {
    setUploading(true);
    const formData = new FormData();
    const adjImgData = [];
    imgData.forEach((img) => {
      if (img.rawImg) {
        formData.append("file", img.rawImg);
      }
      adjImgData.push({
        filename: img.filename,
        key: img.key,
        imgUrl: img.imgUrl,
      });
    });

    formData.append("imgData", JSON.stringify(adjImgData));

    apiCall("post", "updtCreateBan", formData, true, () => {
      toast.success("Banner images updated!");
      setUploading(false);
    });
  };

  return (
    <BanImgCont>
      {dataLoaded ? (
        <PicViewer
          loggedIn
          noRad
          fullscreen
          imgData={imgData}
          setImgData={(imgdata) => setImgData(imgdata)}
        />
      ) : (
        <LoadingIc />
      )}

      {!!imgData.length && (
        <>
          {uploading ? (
            <LoadingIc />
          ) : (
            <AdminBut
              text="SAVE BANNER IMAGES"
              type="add"
              onClick={updateBanners}
            />
          )}
        </>
      )}
    </BanImgCont>
  );
};
