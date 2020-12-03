/* components */
import { NavLink } from "components/NavLink";
/* icons */
import { Rat1Comp } from "icons/Rat1Comp";
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
        <Rat1Comp />
      </FootNavCont>
      <PaymentCont>
        <PaymentIc fontSize="large" />
        <PaymentIc fontSize="large" />
        <PaymentIc fontSize="large" />
      </PaymentCont>
    </FooterCont>
  );
};
