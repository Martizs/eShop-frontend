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
          title="Jūsų užsakymas gautas!"
          text="Užsakymas bus pristatytas nurodytu siuntimo būdu per 20 dienų, jei kils kokių klausimų ar nesklandumų, kreipkitės! Mūsų kontaktus galite rasti skiltyje 'KONTAKTAI' "
        />
      )}
    </MainOrderedCont>
  );
};
