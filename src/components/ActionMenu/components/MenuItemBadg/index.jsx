import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "redux_store/general/actions";
/* styles */
import { MenuItemStyle } from "../MenuItem/style";
import { StyledMenBadge } from "./style";

export const MenuItemBadg = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <MenuItemStyle to="/krepselis" onClick={() => dispatch(toggleMenu())}>
      <StyledMenBadge
        invisible={!cartItems.length}
        badgeContent={cartItems.length}
      >
        KREPŠELIS
      </StyledMenBadge>
    </MenuItemStyle>
  );
};
