/* components */
import { NavLink } from "components/NavLink";
/* icons */
import { Rat1Comp } from "icons/Rat1Comp";
import { VisaLoggo } from "icons/VisaLoggo";
import { MasterLogo } from "icons/MasterLogo";
import { PayPalLog } from "icons/PayPalLog";
/* styles */
import { NavContainer } from "styles/NavContainer";
import { FooterCont, PaymentCont, FootNavCont } from "./style";

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
        <VisaLoggo />
        <MasterLogo />
        <PayPalLog />
      </PaymentCont>
    </FooterCont>
  );
};
