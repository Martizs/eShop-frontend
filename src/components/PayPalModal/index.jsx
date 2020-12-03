import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
/* utils */
import { formOrder } from "./util";
import { apiCall } from "utils/apiCalls";
import { useHistory } from "react-router-dom";
import { initCart } from "redux_store/cart/actions";
import { initSendOpt } from "redux_store/send/actions";
import { useState } from "react";
import { LoadingIc } from "components/LoadingIc";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

Modal.setAppElement("#root");

export const PayPalModal = (props) => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  let history = useHistory();

  const cartItems = useSelector((state) => state.cartItems);
  const sendOpt = useSelector((state) => state.sendOpt);

  const [ppLoading, setPPLoading] = useState(false);

  const createOrder = (data, actions) => {
    const formedData = formOrder(cartItems, sendOpt);

    const purchase_units = [
      {
        amount: {
          value: formedData.total_price + "",
          currency_code: "EUR",
          breakdown: {
            item_total: {
              value: formedData.total_price + "",
              currency_code: "EUR",
            },
          },
        },
        // we add bought stuff to here
        items: formedData.orderItems,
      },
    ];

    return actions.order.create({
      purchase_units,
    });
  };

  const onApprove = (data, actions) => {
    setPPLoading(true);
    return actions.order.capture().then((details) => {
      apiCall("post", "orderSucces", { cartItems }, false, () => {
        dispatch(initCart());
        dispatch(initSendOpt());
        history.push({
          pathname: "/uzsakyta",
          state: { order_successful: true },
        });
      });
    });
  };

  const onError = (err) => {
    toast.error("Įvyko klaida, pabandykite perkrauti puslapį");
  };

  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.onClose}
      style={{
        content: {
          maxWidth: 750,
          height: "fit-content",
          margin: "auto",
          backgroundColor: theme.colors.textColor,
        },
      }}
    >
      {ppLoading && <LoadingIc />}

      <PayPalButton
        style={{
          color: "black",
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </Modal>
  );
};
