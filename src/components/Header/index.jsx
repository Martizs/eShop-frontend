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
        <NavLink to="/apie">APIE MUS</NavLink>
        <LoggoCont onClick={() => history.push("/")}>
          <LoggoComp />
        </LoggoCont>
        <NavLink to="/parduotuve">PARDUOTUVĖ</NavLink>
        <NavLink to="/krepselis">KREPŠELIS</NavLink>
      </NavContainer>
      <IconContainer>
        <FBButton
          fontSize="large"
          onClick={() => iconClick("https://www.google.com/")}
        />
        <InstaButton
          fontSize="large"
          onClick={() => iconClick("https://www.google.com/")}
        />
      </IconContainer>
    </HeaderContainer>
  );
};
