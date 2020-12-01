import { useEffect } from "react";

/* components */
import { LoadingIc } from "components/LoadingIc";
/* styles */
import { CanceledCont } from "./style";
/* utils */
import { apiCall } from "utils/apiCalls";

export const Canceled = (props) => {
  useEffect(() => {
    apiCall(
      "post",
      "cancelOrder",
      { payedCode: props.match.params.orderId },
      false,
      () => {
        props.history.replace("/");
      },
      () => {
        props.history.replace("/");
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CanceledCont>
      <LoadingIc />
    </CanceledCont>
  );
};
