import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const PayPalTest = () => {
  const createOrder = (data, actions) => {
    console.log("data", data);
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    console.log("data", data);
    return actions.order.capture();
  };

  return (
    <div style={{ display: "flex", margin: "auto", width: "80%" }}>
      <div style={{ width: "100%", margin: "auto" }}>
        <PayPalButton createOrder={createOrder} onApprove={onApprove} />
      </div>
    </div>
  );
};
