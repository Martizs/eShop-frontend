import { NavLinkCont } from "./style";

export const NavLink = (props) => {
  const mouseDownHandler = (event) => {
    if (props.ext && event.button < 2) {
      window.open(props.to, "_blank");
    }
  };

  return (
    <NavLinkCont onMouseDown={mouseDownHandler} to={props.to || ""}>
      {props?.children}
    </NavLinkCont>
  );
};
