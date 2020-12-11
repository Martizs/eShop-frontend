/* components */
import { NavLink } from "components/NavLink";
import { useSelector } from "react-redux";
/* styles */
import { StyledBadge } from "./style";

export const CartNav = (props) => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <StyledBadge invisible={!cartItems.length} badgeContent={cartItems.length}>
      <NavLink to="/krepselis">{props.text}</NavLink>
    </StyledBadge>
  );
};
