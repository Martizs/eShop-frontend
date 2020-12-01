import { useState } from "react";
/* components */
import { AdminBut } from "components/AdminBut";
import { SendOptions } from "./components/SendOptions";
/* styles */
import { AdminContainer, AdminNavCont } from "./style";

export const AdminPage = (props) => {
  const [admPage, setAdmPage] = useState("orders");

  const renderAdminPage = () => {
    switch (admPage) {
      case "send":
        return <SendOptions />;
      default:
        return <SendOptions />;
    }
  };

  return (
    <AdminContainer>
      <AdminNavCont>
        <AdminBut
          text="MANAGE SEND OPTIONS"
          type="edit"
          onClick={() => setAdmPage("send")}
        />
        <AdminBut
          text="MANAGE BANNER IMAGES"
          type="edit"
          onClick={() => setAdmPage("banner")}
        />
      </AdminNavCont>
      {renderAdminPage()}
    </AdminContainer>
  );
};
