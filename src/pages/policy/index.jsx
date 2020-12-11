import { useSelector } from "react-redux";
import SimpleTextPage from "components/SimpleTextPage";

export const Policy = () => {
  const currLang = useSelector((state) => state.currLang);
  return (
    <SimpleTextPage
      getEndpoint="getPolicy"
      saveEndpoint="savePolicy"
      title={currLang.policyTxt}
    />
  );
};
