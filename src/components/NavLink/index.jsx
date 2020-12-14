import { NavLinkCont } from "./style";

export const NavLink = (props) => (
  <NavLinkCont to={props.to}>{props?.children}</NavLinkCont>
);
