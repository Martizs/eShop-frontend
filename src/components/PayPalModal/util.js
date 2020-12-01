// helper function to create an order according to paypals standards
export function formOrder(cartItems, sendOpt) {
  let total_price = 0;
  const orderItems = [];

  cartItems.forEach((cartIt) => {
    const itPrice = parseFloat(cartIt.price, 10);
    const itAmount = parseInt(cartIt.selectedAmount, 10);

    orderItems.push({
      name: `${cartIt.title} ${cartIt.selectedSize.name || ""}`,
      unit_amount: {
        currency_code: "EUR",
        value: itPrice + "",
      },
      quantity: itAmount + "",
    });

    total_price += itPrice * itAmount;
  });

  const sendPrice = parseFloat(sendOpt.price, 10);
  total_price += sendPrice;

  orderItems.push({
    name: `${sendOpt.short} ${sendOpt.extraVal || ""}`,
    unit_amount: {
      currency_code: "EUR",
      value: sendPrice + "",
    },
    quantity: "1",
  });

  return {
    orderItems,
    total_price,
  };
}
