import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
/* components */
import { MessagePage } from "components/MessagePage";
import { LoadingIc } from "components/LoadingIc";
/* styles */
import { MainOrderedCont } from "./style";

export const Ordered = (props) => {
  const [success, setSuccess] = useState(null);
  const currLang = useSelector((state) => state.currLang);

  useEffect(() => {
    if (props.location.state?.order_successful) {
      setSuccess(true);
    } else {
      props.history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainOrderedCont>
      {!success ? (
        <LoadingIc />
      ) : (
        <MessagePage
          title={currLang.orderedTitle}
          texts={currLang.orderedTexts}
        />
      )}
    </MainOrderedCont>
  );
};
