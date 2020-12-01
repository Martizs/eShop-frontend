import { useEffect, useState } from "react";
/* components */
import { MessagePage } from "components/MessagePage";
import { LoadingIc } from "components/LoadingIc";
/* styles */
import { MainOrderedCont } from "./style";
import { apiCall } from "utils/apiCalls";
import { toast } from "react-toastify";

export const Ordered = (props) => {
  const [ordCode, setOrdCode] = useState(null);

  useEffect(() => {
    console.log("props.match.params.orderId", props.match.params.orderId);
    if (props.match.params.orderId) {
      apiCall(
        "post",
        "orderPayed",
        { payedCode: props.match.params.orderId },
        false,
        (data) => {
          setOrdCode(data.orderCode);
        },
        () => {
          toast.error("Įvyko klaida, pabandykite perkrauti puslapį");
          props.history.push("/");
        }
      );
    } else {
      props.history.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainOrderedCont>
      {!ordCode ? (
        <LoadingIc />
      ) : (
        <MessagePage
          title={`Užsakymo numeris: ${ordCode}`}
          text="Taip pat užsakymo numeris išsiųstas nurodytu el. paštu"
        />
      )}
    </MainOrderedCont>
  );
};
