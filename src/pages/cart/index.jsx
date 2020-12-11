import { useSelector } from "react-redux";
/* components */
import OrderPage from "components/OrderPage";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const currLang = useSelector((state) => state.currLang);

  return <OrderPage cartItems={cartItems} currLang={currLang} />;
};
