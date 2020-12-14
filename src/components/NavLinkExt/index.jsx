import { NavLinkExCont } from "./style";

export const NavLinkExt = (props) => {
  const mouseDownHandler = (event) => {
    if (event.button < 2) {
      window.open(props.to, "_blank");
    }
  };

  return (
    <NavLinkExCont onMouseDown={mouseDownHandler}>
      {props?.children}
    </NavLinkExCont>
  );
};
