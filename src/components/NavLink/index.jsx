import { useHistory } from "react-router-dom";
import { NavLinkCont } from "./style";

export const NavLink = (props) => {
  let history = useHistory();

  const linkClick = () => {
    if (props.ext) {
      window.open(props.to, "_blank");
    } else {
      history.push(props.to);
    }
  };

  return <NavLinkCont onClick={linkClick}>{props.children}</NavLinkCont>;
};
