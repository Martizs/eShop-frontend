import { NavLink } from "components/NavLink";
/* styles */
import { NavContainer } from "styles/NavContainer";
import { HeaderContainer, IconContainer, FBButton, InstaButton } from "./style";

export const Header = () => {
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
        <NavLink to="/">DZHIUNGLES</NavLink>
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
