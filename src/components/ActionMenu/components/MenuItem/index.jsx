/* styles */
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleMenu } from "redux_store/general/actions";
import { MenuItemStyle } from "./style";

export const MenuItem = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const mouseDownHandler = () => {
    if (props.ext) {
      window.open(props.to, "_blank");
    } else {
      history.push(props.to);
    }
    dispatch(toggleMenu());
  };

  return (
    <MenuItemStyle onClick={mouseDownHandler}>{props?.children}</MenuItemStyle>
  );
};
