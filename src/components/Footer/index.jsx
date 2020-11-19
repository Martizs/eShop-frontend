/* components */
import { NavLink } from "components/NavLink";
/* styles */
import { NavContainer } from "styles/NavContainer";
import { FooterCont, PaymentCont, PaymentIc, FootNavCont } from "./style";

export const Footer = () => {
  return (
    <FooterCont>
      <FootNavCont>
        <NavContainer>
          <NavLink to="/kontaktai">KONTAKTAI</NavLink>
          <NavLink to="/info">INFORMACIJA</NavLink>
          <NavLink to="/priv">PRIVATUMO POLITIKA</NavLink>
        </NavContainer>
      </FootNavCont>
      <PaymentCont>
        <PaymentIc fontSize="large" />
        <PaymentIc fontSize="large" />
        <PaymentIc fontSize="large" />
      </PaymentCont>
    </FooterCont>
  );
};
