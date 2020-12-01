import { useState } from "react";
/* components */
import { AdminBut } from "components/AdminBut";
import { SendOptions } from "./components/SendOptions";
import { Orders } from "./components/Orders";
/* styles */
import { AdminContainer, AdminNavCont } from "./style";

export const AdminPage = (props) => {
  const [admPage, setAdmPage] = useState("orders");

  const renderAdminPage = () => {
    switch (admPage) {
      case "send":
        return <SendOptions />;
      case "orders":
        return <Orders />;
      default:
        return <Orders />;
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
        <AdminBut
          text="MANAGE ORDERS"
          type="edit"
          onClick={() => setAdmPage("orders")}
        />
      </AdminNavCont>
      {renderAdminPage()}
    </AdminContainer>
  );
};
