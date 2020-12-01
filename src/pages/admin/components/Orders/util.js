export function formOrders(orders) {
  const formedOrders = [];

  orders.forEach((order) => {
    const { ordSizes, ...restOrd } = order;

    const cartItems = [];
    ordSizes.forEach((ordSize) => {
      const size = ordSize.size;
      cartItems.push({
        key: Math.random().toString(36).substr(2, 10),
        selectedAmount: ordSize.selectedAmount,
        title: size.product.title,
        selectedSize: {
          name: size.name,
        },
      });
    });

    formedOrders.push({
      restOrd,
      cartItems,
    });
  });

  return formedOrders;
}
