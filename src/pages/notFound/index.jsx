import { useSelector } from "react-redux";
import { MessagePage } from "components/MessagePage";

export const NotFound = () => {
  const currLang = useSelector((state) => state.currLang);
  return <MessagePage title="404" texts={[currLang.notFoundTxt]} />;
};
