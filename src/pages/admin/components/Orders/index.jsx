import { toast } from "react-toastify";
import { useState, useEffect } from "react";
/* components */
import OrderPage from "components/OrderPage";
import { LoadingIc } from "components/LoadingIc";
/* utils */
import { apiCall } from "utils/apiCalls";
import { formOrders } from "./util";
/* styles */
import { OrderCont, OrdCodeTxt, SingOrdCont, AdmOrdButCont } from "./style";
import { MainTitleText } from "styles/MainTitleText";
import { AdminBut } from "components/AdminBut";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoaded(false);
    apiCall("get", "getOrders", null, true, (data) => {
      setOrders(formOrders(data));
      setLoaded(true);
    });
  };

  const manageOrd = (type, id) => {
    const question =
      type === "decline"
        ? "Are you sure you want to decline the order?"
        : "Are you sure you want to confirm the order?";

    if (window.confirm(question)) {
      const endPoint = type === "decline" ? "declineOrder" : "confirmOrder";
      apiCall("post", endPoint, { id }, true, () => {
        const message =
          type === "decline" ? "Order declined" : "Order confirmed";
        toast.success(message);
        loadData();
      });
    }
  };

  return (
    <OrderCont>
      <MainTitleText>ORDERS</MainTitleText>
      {loaded ? (
        <>
          {orders.map((order) => {
            const crtDate = order.restOrd.createdAt;

            const createdDate = crtDate.substring(0, crtDate.indexOf("T"));
            const time = crtDate.substring(
              crtDate.indexOf("T") + 1,
              crtDate.indexOf(".")
            );

            return (
              <SingOrdCont key={order.restOrd.orderCode}>
                <OrdCodeTxt>ORDER CODE: {order.restOrd.orderCode}</OrdCodeTxt>
                <OrdCodeTxt>
                  ORDERED AT: {createdDate} {time}
                </OrdCodeTxt>
                {order.restOrd.paymentPending && (
                  <OrdCodeTxt red>PAYMENT PENDING</OrdCodeTxt>
                )}
                <OrderPage
                  orderInfo={order.restOrd}
                  cartItems={order.cartItems}
                  admin
                />
                <AdmOrdButCont>
                  <AdminBut
                    text="CONFIRM ORDER"
                    type="add"
                    onClick={() => manageOrd("confirm", order.restOrd._id)}
                  />
                  <AdminBut
                    text="DECLINE ORDER"
                    type="del"
                    onClick={() => manageOrd("decline", order.restOrd._id)}
                  />
                </AdmOrdButCont>
              </SingOrdCont>
            );
          })}
        </>
      ) : (
        <LoadingIc />
      )}
    </OrderCont>
  );
};
