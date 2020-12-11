import { useSelector } from "react-redux";
import SimpleTextPage from "components/SimpleTextPage";

export const Contacts = () => {
  const currLang = useSelector((state) => state.currLang);

  return (
    <SimpleTextPage
      getEndpoint="getContact"
      saveEndpoint="saveContact"
      title={currLang.contactsTxt}
    />
  );
};
