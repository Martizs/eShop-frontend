import { useSelector } from "react-redux";
import SimpleTextPage from "components/SimpleTextPage";

export const Info = () => {
  const currLang = useSelector((state) => state.currLang);
  return (
    <SimpleTextPage
      getEndpoint="getInfo"
      saveEndpoint="saveInfo"
      title={currLang.infoTxt}
    />
  );
};
