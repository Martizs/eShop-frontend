import { useHistory } from "react-router-dom";
/* components */
import { NavLink } from "components/NavLink";
/* styles */
import { NavContainer } from "styles/NavContainer";
import {
  HeaderContainer,
  IconContainer,
  FBButton,
  InstaButton,
  LoggoCont,
} from "./style";
/* icons */
import { LoggoComp } from "icons/LoggoComp";

export const Header = () => {
  let history = useHistory();

  const iconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <NavLink
          to="https://www.youtube.com/channel/UCVfhKzY261aiqKnx6UyZ4Gg"
          ext
        >
          KANALAS
        </NavLink>
        <NavLink to="/ap">APIE MUS</NavLink>
        <LoggoCont to="/">
          <LoggoComp />
        </LoggoCont>
        <NavLink to="/parduotuve">PARDUOTUVĖ</NavLink>
        <NavLink to="/krepselis">KREPŠELIS</NavLink>
      </NavContainer>
      <IconContainer>
        <NavLink to="https://www.google.com/" ext>
          <FBButton />
        </NavLink>
        <NavLink to="https://www.google.com/" ext>
          <InstaButton />
        </NavLink>
      </IconContainer>
    </HeaderContainer>
  );
};
