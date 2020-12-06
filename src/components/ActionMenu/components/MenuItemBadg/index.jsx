import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleMenu } from "redux_store/general/actions";
/* styles */
import { MenuItemStyle } from "../MenuItem/style";
import { StyledMenBadge } from "./style";

export const MenuItemBadg = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <MenuItemStyle
      onClick={() => {
        dispatch(toggleMenu());
        history.push("/krepselis");
      }}
    >
      <StyledMenBadge
        invisible={!cartItems.length}
        badgeContent={cartItems.length}
      >
        KREPŠELIS
      </StyledMenBadge>
    </MenuItemStyle>
  );
};
