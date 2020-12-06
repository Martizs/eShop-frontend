import { useEffect, useState } from "react";
/* components */
import { MessagePage } from "components/MessagePage";
import { LoadingIc } from "components/LoadingIc";
/* styles */
import { MainOrderedCont } from "./style";

export const Ordered = (props) => {
  const [success, setSuccess] = useState(null);

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
          title="Jūsų užsakymas priimtas!"
          texts={[
            "Siunta jus turėtų pasiekti per 1-3 d.d. jeigu pasirinkote LP EXPRESS paštomatą",
            "4-5 d.d. - registruotą LIETUVOS PAŠTO siuntą Lietuvoje",
            "5-10 d.d. - siuntimą į užsienį.",
            "Užsisakius Šventiniu arba pandemijos laikotarpiu, siuntų pristatymo laikas gali kisti.",
            "Ačiū, kad remiate DZHIUNGLES!",
          ]}
        />
      )}
    </MainOrderedCont>
  );
};
