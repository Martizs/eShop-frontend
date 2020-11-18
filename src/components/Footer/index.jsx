/* components */
import { NavLink } from "components/NavLink";
/* styles */
import { NavContainer } from "styles/NavContainer";
import { FooterCont, PaymentCont, PaymentIc } from "./style";
import { HeadFootCont } from "styles/HeadFootCont";

export const Footer = () => {
  return (
    <FooterCont>
      <HeadFootCont>
        <NavContainer>
          <NavLink to="/kontaktai">KONTAKTAI</NavLink>
          <NavLink to="/info">INFORMACIJA</NavLink>
          <NavLink to="/priv">PRIVATUMO POLITIKA</NavLink>
        </NavContainer>
      </HeadFootCont>
      <PaymentCont>
        <PaymentIc fontSize="large" />
        <PaymentIc fontSize="large" />
        <PaymentIc fontSize="large" />
      </PaymentCont>
    </FooterCont>
  );
};
