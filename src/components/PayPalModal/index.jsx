import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
/* utils */
import { formOrder } from "./util";
import { apiCall } from "utils/apiCalls";
import { useHistory } from "react-router-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

Modal.setAppElement("#root");

export const PayPalModal = (props) => {
  const theme = useContext(ThemeContext);
  let history = useHistory();

  const cartItems = useSelector((state) => state.cartItems);
  const sendOpt = useSelector((state) => state.sendOpt);

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
    return actions.order.capture().then((details) => {
      apiCall("post", "orderSucces", { cartItems }, false, () => {
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