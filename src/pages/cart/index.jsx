import { useSelector } from "react-redux";
/* components */
import OrderPage from "components/OrderPage";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return <OrderPage cartItems={cartItems} />;
};
